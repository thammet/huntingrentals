import { Avatar, Button, Card, CardContent, CardMedia, Divider, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import { Offer, OfferItem } from "../../Models/Offer";
import { ChangeEvent, useEffect, useState } from "react";
import './OfferComponent.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Email, TelephoneNumber } from "../../Constants";
import { formatPhoneNumber } from "../../Utis";

const USDollar =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const PercentageFormatter =  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const percentageOfSalePrice = .161;
const dayDiscount = .05;


type OfferItemChanged = (offerItem: OfferItem) => void;
function OfferItemQuantity(props: {offerItem: OfferItem, onChange: OfferItemChanged}) {
    const [quantity, setQuantity] = useState(props.offerItem.currentQuantity);
    
    const changed = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let newQuantity = parseInt(e.target.value);
        if (newQuantity < 0 || isNaN(newQuantity)) {
            setQuantity(0);
            e.target.select(); // todo this doesn't work. want it to reselect entire text so they can easily type again
        }
        else if (newQuantity > props.offerItem.maxQuantity) setQuantity(props.offerItem.maxQuantity);
        else setQuantity(newQuantity)
    }

    useEffect(() => {
        props.onChange({
            ...props.offerItem,
            currentQuantity: quantity
        })
    }, [quantity, props.offerItem.maxQuantity])

    return (
        <TextField
            label="Quantity"
            sx={{ width: '20ch' }}
            value={quantity}
            onChange={changed}
            onFocus={e => e.target.select()}
            InputProps={{
                endAdornment: <InputAdornment position="end">/ {props.offerItem.maxQuantity} max</InputAdornment>,
            }}
            variant="standard"
            type="number"
        />
    )
}

type OfferChanged = (offer: Offer) => void;
export default function OfferComponent(props: {offer: Offer, onChange: OfferChanged}) {
    const [days, setDays] = useState(props.offer.days);
    const maxDays = 4;
    const [dailyPrice, setDailyPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalSalesPrice, setTotalSalesPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    
    useEffect(() => {
        if(days <= 0) setDays(1);
        if(days > maxDays) setDays(maxDays)
        props.onChange({
            ...props.offer,
            days: isNaN(days) ? 1 : days 
        })
    }, [days]);

    useEffect(() => {
        const currentDays = isNaN(days) ? 1 : days;
        setDiscount(currentDays <=1 ? 0 : (currentDays * dayDiscount))

        let totalSalesPrice = 0;
        for(const offerItem of props.offer.items) {
            totalSalesPrice += offerItem.price * offerItem.currentQuantity
        }
        setTotalSalesPrice(totalSalesPrice)
    }, [days, props.offer.items])

    useEffect(() => {
        setDailyPrice(totalSalesPrice * percentageOfSalePrice)
    }, [totalSalesPrice])

    useEffect(() => {   
        setTotalPrice(dailyPrice * props.offer.days * (1 - discount))
    }, [dailyPrice, props.offer.days, discount])

    const offerItemChanged = (offerItem: OfferItem) => {
        const index = props.offer.items.findIndex(x => x.id === offerItem.id);
        const items = [...props.offer.items];
        items.splice(index, 1, offerItem)
        props.onChange(
            {
                ...props.offer,
                items
            }
        )
    }

    return (
        <div id="container">
            <Card style={{height: '100%'}} variant="outlined">
                <CardMedia
                    className="card-image"
                    image={`${process.env.PUBLIC_URL}/${props.offer.imageUrl}`}
                />
                <CardContent>
                    <div style={{textAlign: 'center'}}>
                        <Typography gutterBottom variant="h4" component="div" style={{fontWeight: 'bold'}}>
                                {props.offer.name}
                        </Typography>
                    </div>
                    
                    <div id="content-container">
                        <div>
                            <Typography variant="h6" component="div">
                                Equipment
                            </Typography>
                            <List className="equipment-container">
                                {props.offer.items.map(offerItem => (
                                    <ListItem key={offerItem.id} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar className="offer-avatar" alt={offerItem.name}  src={`${process.env.PUBLIC_URL}/${offerItem.imageUrl}`} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<div>{offerItem.name} </div>}
                                            secondary={<OfferItemQuantity offerItem={offerItem} onChange={offerItemChanged} />}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                        <div>
                            <div id="total-container">
                                <Typography variant="h6" component="div">
                                    Daily Price
                                </Typography>
                                <Typography variant="h6" component="div" style={{textAlign: 'end'}}>
                                    {USDollar.format(dailyPrice)}
                                </Typography>
                                <div></div>
                                <div style={{textAlign: 'end'}}>X</div>
                                <Typography variant="h6" component="div">
                                    # Days
                                </Typography>
                                <Input  
                                    value={days}
                                    onChange={e => setDays(parseInt(e.target.value))}
                                    onFocus={e => e.target.select()}
                                    //onWheel={(e) => e.preventDefault()} // so value doesn't change on scroll
                                    type="number"
                                    inputProps={{ style: {textAlign: 'end'} }}
                                />

                                {/* <div></div>
                                <div style={{textAlign: 'end'}}>X</div> */}

                                <Typography variant="h6" component="div">
                                    Discount 
                                </Typography>
                                <Typography variant="h6" component="div" style={{textAlign: 'end'}}>
                                    {PercentageFormatter.format(discount)}
                                </Typography>

                                <Divider style={{gridColumn: '1/-1'}} />

                                <Typography variant="h6" component="div">
                                    Total
                                </Typography>
                                <Typography variant="h6" component="div" style={{textAlign: 'end'}}>
                                    {USDollar.format(totalPrice)}
                                </Typography>

                                <div style={{gridColumn: '1/-1', textAlign: 'end'}}>
                                    <Divider  />
                                    <Typography variant="caption" component="small" style={{textAlign: 'end'}}>
                                        You <strong>save {USDollar.format(totalSalesPrice - totalPrice)}</strong> vs buying yourself
                                    </Typography>
                                </div>
                                
                            </div>

                            <div style={{marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                                <Button href={`tel:${TelephoneNumber}`} fullWidth size="large" variant="contained" startIcon={<PhoneIcon />}>{formatPhoneNumber(TelephoneNumber)}</Button>
                                <Button href={`mailto:${Email}`} fullWidth size="large" variant='contained' color="success" startIcon={<EmailIcon />}>{Email}</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}