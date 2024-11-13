import './rentals.css'
import { Accordion, AccordionItem, Avatar, Card, CardBody, Input, Spacer } from "@nextui-org/react"
import { useEffect, useState } from "react"
import IRental from '../Models/IRental';
import PriceCard from './price-card';
import Options from './options';

const today = new Date();

export default function Rentals() {
    const [rentals, setRentals] = useState(allRentals);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [delivery, setDelivery] = useState(false);
    const [decoySetup, setDecoySetup] = useState(false);

    const onQuantityChanged = (rental: IRental, quantity: number) => {
        if(quantity > rental.maxQuantity) {
            quantity = rental.maxQuantity
        } else if (quantity < 0 || Number.isNaN(quantity)) {
            quantity = 0
        }

        rental.currentQuantity = quantity;
        setRentals([...rentals]);
    }

    useEffect(() => {
        if(startDate > endDate) setEndDate(startDate)
    }, [startDate])

    useEffect(() => {
        if(endDate < startDate) setStartDate(endDate);
    }, [endDate])

    return (
        <div>
            <h1 className="text-center font-semibold text-xl text-warning">Rentals</h1>
            <Spacer y={1} />
            <div className='font-semibold text-center'>
                If you're looking for decoys, blinds, ATVs, or camo, we've got you covered. 
                <Spacer />
                Customize the quantities of each item, choose a reservation date, and add some services (optional) to get an estimated price. 
            </div>

            <Spacer y={5} />

            <div style={{display: 'grid', gap: '40px'}}>
                <Card>
                    <CardBody>
                        <p className='text-tiny uppercase font-bold'>Rentals</p>
                        <Spacer y={2} />

                        <Accordion defaultExpandedKeys={["Duck"]} keepContentMounted={true} selectionMode='multiple'>
                            {rentalTypes.map((type, index) => (
                                <AccordionItem key={index} title={type}>
                                    <div className="rental-container">
                                        {rentals.filter(x => x.type == type).map((rental, i) => (
                                            <> 
                                            {/* TODO Should set key here */}
                                                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                                                    <Avatar src={`/Decoys/${rental.image}`} size='lg' />
                                                    <p className='text-md font-bold'>{rental.name}</p>
                                                </div>

                                                <Input 
                                                    key={rental.name}
                                                    label="Quantity" 
                                                    type="number"
                                                    variant='bordered'
                                                    size='lg'
                                                    value={rental.currentQuantity.toString()}
                                                    onValueChange={e => onQuantityChanged(rental, parseInt(e))}
                                                    endContent={<div style={{whiteSpace: 'nowrap'}}>/ {rental.maxQuantity}</div>}
                                                />
                                            </>
                                        ))}
                                    </div>
                                </AccordionItem>
                            ))}
                        </Accordion>

                    </CardBody>
                </Card>

                <Options 
                    startDate={startDate} 
                    startDateChanged={setStartDate} 
                    endDate={endDate}
                    endDateChanged={setEndDate}
                    delivery={delivery} 
                    deliveryChanged={setDelivery} 
                    decoySetup={decoySetup} decoySetupChanged={setDecoySetup} 
                    discountable
                />
               
                <PriceCard startDate={startDate} endDate={endDate} rentals={rentals} delivery={delivery} decoySetup={decoySetup}/>
            </div>
        </div>
    )
}


const rentalTypes = ['Duck', 'Goose', 'Equipment'];
const PercentageOfSalePrice = .15;
const allRentals: IRental[] = [
    // Duck
    {
        name: "Full Body Duck (Field)",
        type: 'Duck',
        image: '',
        maxQuantity: 100,
        currentQuantity: 0,
        salePrice: 10,
        rentPrice: 10 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Full Body Duck (Floating)",
        type: 'Duck',
        image: '',
        maxQuantity: 75,
        currentQuantity: 0,
        salePrice: 10,
        rentPrice: 10 * PercentageOfSalePrice,
        setupPrice: 0.10
    },
    {
        name: "Motorized Duck",
        type: 'Duck',
        image: '',
        maxQuantity: 5,
        currentQuantity: 0,
        salePrice: 120,
        rentPrice: 120 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Black Duck (Field)",
        type: 'Duck',
        image: '',
        maxQuantity: 50,
        currentQuantity: 0,
        salePrice: 10,
        rentPrice: 10 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Black Duck (Floating)",
        type: 'Duck',
        image: '',
        maxQuantity: 20,
        currentQuantity: 0,
        salePrice: 10,
        rentPrice: 10 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Feeding Duck",
        type: 'Duck',
        image: '',
        maxQuantity: 100,
        currentQuantity: 0,
        salePrice: 5,
        rentPrice: 5 * PercentageOfSalePrice,
        setupPrice: 0.04
    },



    // Geese
    {
        name: "Full Body Goose (Field)",
        type: 'Goose',
        image: '',
        maxQuantity: 100,
        currentQuantity: 0,
        salePrice: 20,
        rentPrice: 20 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Full Body Goose (Floating)",
        type: 'Goose',
        image: '',
        maxQuantity: 80,
        currentQuantity: 0,
        salePrice: 20,
        rentPrice: 20 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Feeding Goose",
        type: 'Goose',
        image: '',
        maxQuantity: 50,
        currentQuantity: 0,
        salePrice: 7.5,
        rentPrice: 7.5 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: "Goose Silhouette",
        type: 'Goose',
        image: '',
        maxQuantity: 100,
        currentQuantity: 0,
        salePrice: 5,
        rentPrice: 5 * PercentageOfSalePrice,
        setupPrice: 0.10
    },

    {
        name: 'Snow Goose Socks',
        type: 'Goose',
        image: 'allsockswideright.jpg',
        maxQuantity: 2000,
        currentQuantity: 0,
        salePrice: 3.5,
        rentPrice: 0.2,
        setupPrice: 0.04
    },



    // Equipment
    {
        name: 'Layout Blind',
        type: 'Equipment',
        image: 'goosedecoy.png',
        currentQuantity: 0,
        maxQuantity: 10,
        salePrice: 200,
        rentPrice: 20,
        setupPrice: 1
    },
    {
        name: 'A Frame',
        type: 'Equipment',
        image: 'aframe.jpg',
        currentQuantity: 0,
        maxQuantity: 10,
        salePrice: 200,
        rentPrice: 20,
        setupPrice: 2
    },
    {
        name: 'ATV',
        type: 'Equipment',
        image: '',
        currentQuantity: 0,
        maxQuantity: 2,
        salePrice: 5000,
        rentPrice: 75
    },
    {
        name: 'Camo',
        type: 'Equipment',
        image: '',
        currentQuantity: 0,
        maxQuantity: 10,
        salePrice: 300,
        rentPrice: 15
    }
]