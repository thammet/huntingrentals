import './rentals.css'
import { Avatar, Card, CardBody, Input, Spacer } from "@nextui-org/react"
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

    const onQuantityChanged = (indexOfRental: number, quantity: number) => {
        const rental = rentals[indexOfRental];
        if(quantity > rental.maxQuantity) {
            quantity = rental.maxQuantity
        } else if (quantity < 0 || Number.isNaN(quantity)) {
            quantity = 0
        }

        rentals[indexOfRental].currentQuantity = quantity;
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

                        <div id="rental-container">
                            {rentals.map((rental, i) => (
                                <> 
                                {/* TODO Should set key here */}
                                    <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                                        <Avatar src={`/Decoys/${rental.image}`} size='lg' />
                                        <p className='text-md font-bold'>{rental.name}</p>
                                    </div>

                                    <Input 
                                        label="Quantity" 
                                        type="number"
                                        variant='bordered'
                                        size='lg'
                                        value={rental.currentQuantity.toString()}
                                        onValueChange={e => onQuantityChanged(i, parseInt(e))}
                                        endContent={<div style={{whiteSpace: 'nowrap'}}>/ {rental.maxQuantity}</div>}
                                    />
                                </>
                            ))}
                        </div>

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


const PercentageOfSalePrice = .15;
const allRentals: IRental[] = [
    {
        name: 'Full Body',
        image: 'alldecoyswide.jpg',
        maxQuantity: 100,
        currentQuantity: 0,
        salePrice: 15,
        rentPrice: 15 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: 'Socks',
        image: 'allsockswideright.jpg',
        maxQuantity: 1000,
        currentQuantity: 0,
        salePrice: 3.5,
        rentPrice: 3.5 * PercentageOfSalePrice,
        setupPrice: 0.04
    },
    {
        name: 'Layout Blind',
        image: 'goosedecoy.png',
        currentQuantity: 0,
        maxQuantity: 2,
        salePrice: 200,
        rentPrice: 200 * PercentageOfSalePrice,
        setupPrice: 1
    },
    {
        name: 'A Frame',
        image: 'aframe.jpg',
        currentQuantity: 0,
        maxQuantity: 2,
        salePrice: 200,
        rentPrice: 200 * PercentageOfSalePrice,
        setupPrice: 2
    },
    {
        name: 'ATV',
        image: '',
        currentQuantity: 0,
        maxQuantity: 2,
        salePrice: 5000, // todo 
        rentPrice: 75
    },
    {
        name: 'Camo',
        image: '',
        currentQuantity: 0,
        maxQuantity: 4,
        salePrice: 300, // todo 
        rentPrice: 20
    }
]