import "./options.css"
import { faHammer, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spacer, Card, CardBody, Checkbox, } from "@nextui-org/react"
import DatePicker from "./DatePicker"
import { useEffect } from "react"
import { appInsights } from "../app-insights"


export default function Options(props: {
    startDate: Date, startDateChanged: any,
    endDate: Date, endDateChanged: any,
    delivery: boolean, deliveryChanged: any,
    decoySetup: boolean, decoySetupChanged: any,
    discountable?: boolean
}) {
    useEffect(() => {
        if(props.delivery) {
            appInsights.trackEvent({
                name: 'Delivery Selected'
            })
        }
    }, [props.delivery])

    useEffect(() => {
        if(props.decoySetup) {
            appInsights.trackEvent({
                name: 'Decoy Setup Selected'
            })
        }
    }, [props.decoySetup])

    return (
        <>
            <Card>
                <CardBody>
                    <div>
                        <p className='text-tiny uppercase font-bold'>Reservation Date</p>
                        <Spacer y={2} />
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                            <DatePicker label="From" date={props.startDate} dateChanged={props.startDateChanged} />
                            <DatePicker label="To" date={props.endDate} dateChanged={props.endDateChanged} />
                        </div>
                        {props.discountable  && (
                            <>
                            <Spacer />
                            <p className="text-tiny text-default-500">Earn a discount by reserving more days</p>
                            </>
                        )}
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <div>
                        <p className='text-tiny uppercase font-bold'>Services</p>
                        <Spacer y={4} />

                        <Checkbox 
                            isSelected={props.decoySetup} 
                            onValueChange={props.decoySetupChanged}
                            size="lg" 
                            className="border px-4 py-3 max-w rounded-xl border-success-100 bg-success-50/20 mx-1"
                            color="success"
                        >
                            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '10px'}}>
                                <FontAwesomeIcon icon={faHammer} fontSize={'x-large'} />
                                <div>
                                    <p className="text-md uppercase font-bold">Decoy Setup</p>
                                    <p className="text-tiny font-bold text-default-500">Building and setting up 100s of decoys can be a pain, especially in the dark. Skip the hassle and let us do it for you!</p>
                                </div>
                            </div>
                        </Checkbox>

                        <Spacer y={8} />

                        <Checkbox 
                            isSelected={props.delivery} 
                            onValueChange={props.deliveryChanged}
                            size="lg" 
                            className="border px-4 py-3 rounded-xl border-success-100 bg-success-50/20 mx-1"
                            color="success"
                        >
                            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '10px'}}>
                                <FontAwesomeIcon icon={faTruck} fontSize={'x-large'} />
                                <div>
                                    <p className="text-md uppercase font-bold">Delivery</p>
                                    <p className="text-tiny font-bold text-default-500">Don't have a truck or trailer? No problem! We can deliver the equipment to the hunt location and pick it up.</p>
                                    <Spacer />
                                    <p className="text-tiny font-bold text-default-500">We will ask for the hunt location later.</p>
                                </div>
                            </div>
                        </Checkbox>

                        <Spacer y={2} />
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

