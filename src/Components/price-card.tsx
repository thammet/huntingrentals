import { Button, Card, CardBody, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import IRental from "../Models/IRental";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Contact from "./contact";
import { BaseDecoySetupCharge, BaseDeliveryCharge } from "../constants";
import { appInsights } from "../app-insights";

const USDollar =  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const PercentageFormatter =  new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});


export default function PriceCard(props: {rentals: IRental[], startDate: Date, endDate: Date, delivery: boolean, decoySetup: boolean}) {
    const [days, setDays] = useState(0);
    const [dailySalePrice, setDailySalePrice] = useState(0);
    const [dailyRentalPrice, setDailyRentalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [decoySetupPrice, setDecoySetupPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [savings, setSavings] = useState(0);
    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var diff = (props.endDate as any) - (props.startDate as any)
        setDays(Math.round(Math.abs(diff / oneDay)) + 1)
    }, [props.startDate, props.endDate])

    useEffect(() => {
        const discountRate = 0.1;
        let discount = discountRate * Math.floor(days / 2);
        if(discount > 0.25) discount = 0.25;
        setDiscount(discount);
    }, [days])

    useEffect(() => {
        let rentalPrice = 0;
        let salePrice = 0;
        let decoySetupPrice = 0;
        for(var rental of props.rentals) {
            rentalPrice += rental.currentQuantity * rental.rentPrice * (1 - discount)
            salePrice += rental.currentQuantity * rental.salePrice;
            decoySetupPrice += rental.setupPrice ? rental.currentQuantity * rental.setupPrice : 0
        }
        setDailyRentalPrice(rentalPrice);
        setDailySalePrice(salePrice);
        setDecoySetupPrice(BaseDecoySetupCharge + decoySetupPrice)
    }, [props.rentals, discount]);

    useEffect(() => {
        let price = dailyRentalPrice * days;
        if(props.delivery) price += BaseDeliveryCharge;
        if(props.decoySetup) price += decoySetupPrice;
        setTotalPrice(price)
    }, [dailyRentalPrice, days, props.delivery, props.decoySetup]);

    useEffect(() => {
        if(days == 0) setSavings(0);
        else setSavings(dailySalePrice - (dailyRentalPrice * days))
    }, [dailyRentalPrice, dailySalePrice, days]);

    useEffect(() => {
        if(!isOpen) return
        appInsights.trackEvent({
            name: 'Price Breakdown'
        }) 
    }, [isOpen])

    return (
        <div>
            <Card shadow="lg">
                <CardBody>
                    <div className="text-2xl" style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
                        <span>Total:</span> 
                        <span>{USDollar.format(totalPrice)}</span>
                    </div>

                    {savings > 0 && (
                        <div className="text-sm text-center text-default-500">
                            <Spacer y={1} />
                            You <span className="font-bold">save {USDollar.format(savings)}</span> vs buying yourself
                        </div>
                    )}

                    <Spacer y={5} />
                    <Contact />

                    <Spacer y={5} />
                   <Button onClick={onOpen} variant="flat" startContent={<FontAwesomeIcon icon={faEye}/>}>View Price Breakdown</Button>
                </CardBody>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" placement="center">
                <ModalContent>
                    <ModalHeader>Price Breakdown</ModalHeader>
                    <ModalBody>
                        <div>
                            <p className='text-tiny uppercase font-bold'>Rentals</p>
                            <Spacer y={2} />
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}} className="text-xl">

                                <div>
                                    Daily Price
                                    {discount > 0 && (
                                        <>
                                        <Spacer />
                                        <p className="text-tiny">Discount {PercentageFormatter.format(discount)}</p>
                                        </>
                                    )}
                                </div>
                                <div className="text-end">{USDollar.format(dailyRentalPrice)}</div>

                                <div></div>
                                <div className="text-end text-sm">X</div>

                                <div># Days</div>
                                <div className="text-end">{days}</div>
                            </div>
                        </div>
                        {(props.delivery || props.decoySetup) && (
                            <>
                            <Spacer y={5} />
                            <div>
                                <p className='text-tiny uppercase font-bold'>Services</p>
                                <Spacer y={2} />
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}} className="text-xl">
                                    {props.delivery && (
                                        <>
                                            <div>Delivery</div>
                                            <div className="text-end">{USDollar.format(BaseDeliveryCharge)}</div>
                                        </>
                                    )}

                                    {props.decoySetup && (
                                        <>
                                            <div>Decoy Setup</div>
                                            <div className="text-end">{USDollar.format(decoySetupPrice)}</div>
                                        </>
                                    )}
                                </div>
                            </div>
                            </>
                        )}
                        <Spacer y={5} />
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}} className="text-xl">
                            <div>Total</div>
                            <div className="text-end">{USDollar.format(totalPrice)}</div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onClose}>Ok</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}