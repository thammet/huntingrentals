import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Input, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material";
import { Offer, OfferItem } from "../Models/Offer";
import { useEffect, useState } from "react";
import './OfferComponent.css'
import PhoneIcon from '@mui/icons-material/Phone';
import { TelephoneNumber } from "../Constants";
import { formatPhoneNumber } from "../Utis";

const USDollar =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

type OfferItemChanged = (offerItem: OfferItem) => void;
function OfferItemQuantity(props: {offerItem: OfferItem, onChange: OfferItemChanged}) {
    const [quantity, setQuantity] = useState(props.offerItem.maxQuantity);
    
    useEffect(() => {
        if(quantity < 0 || isNaN(quantity)) setQuantity(0);
        else if(quantity > props.offerItem.maxQuantity) setQuantity(props.offerItem.maxQuantity);
        // todo force stepping eventually else if(quantity % 10 != 0) setQuantity(Math.floor(quantity / 10));
        else {
            props.onChange({
                ...props.offerItem,
                currentQuantity: quantity
            })
        }
    }, [quantity, props.offerItem.maxQuantity])



    return (
        <TextField
            label="Quantity"
            sx={{ width: '20ch' }}
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
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
    
    useEffect(() => {
        if(days < 1 || isNaN(days)) setDays(1);
        if(days > 365) setDays(365)
        props.onChange({
            ...props.offer,
            days
        })
    }, [days])

    const calculateDailyPrice = () => {
        let price = 0;
        for(const offerItem of props.offer.items) {
            price += offerItem.price * offerItem.currentQuantity
        }
        return price;
    }

    const calculateTotalPrice = () => {
        return calculateDailyPrice() * days;
    }

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
                    <Typography variant="h6" component="div">
                        Equipment
                    </Typography>
                    <div id="content-container">
                       <div id="equipment-container">
                            <List>
                                {props.offer.items.map(offerItem => (
                                    <ListItem key={offerItem.id} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={offerItem.name} src={offerItem.imageUrl} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<div>{offerItem.name} <small>({USDollar.format(offerItem.price)})</small></div>}
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
                                    {USDollar.format(calculateDailyPrice())}
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

                                <Divider style={{gridColumn: '1/-1'}} />

                                <Typography variant="h6" component="div">
                                    Total
                                </Typography>
                                <Typography variant="h6" component="div" style={{textAlign: 'end'}}>
                                    {USDollar.format(calculateTotalPrice())}
                                </Typography>
                            </div>

                            <div style={{marginTop: '10px'}}>
                                <Button href={`tel:${TelephoneNumber}`} fullWidth size="large" variant="contained" startIcon={<PhoneIcon />}>{formatPhoneNumber(TelephoneNumber)}</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}