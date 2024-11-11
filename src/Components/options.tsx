import "./options.css"
import { faHammer, faTruck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spacer, Switch, Accordion, AccordionItem } from "@nextui-org/react"
import Delivery from "./delivery"
import DatePicker from "./DatePicker"


export default function Options(props: {
    startDate: Date, startDateChanged: any,
    endDate: Date, endDateChanged: any,
    delivery: boolean, deliveryChanged: any,
    decoySetup: boolean, decoySetupChanged: any
}) {
    return (
        <div>
            <div>
                <p className='text-tiny uppercase font-bold'>Reservation Date</p>
                <Spacer y={2} />
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                    <DatePicker label="From" date={props.startDate} dateChanged={props.startDateChanged} />
                    <DatePicker label="To" date={props.endDate} dateChanged={props.endDateChanged} />
                </div>
                <Spacer />
                <p className="text-tiny text-default-500">Earn a discount by reserving more days</p>
            </div>

            <Spacer y={5} />

            <div>
                <p className='text-tiny uppercase font-bold'>Options</p>
                <Spacer y={2} />

                <Switch 
                    isSelected={props.decoySetup} 
                    onValueChange={props.decoySetupChanged}
                    startContent={<FontAwesomeIcon icon={faHammer}/>}
                >
                    <p className="text-foreground text-large">Decoy Setup</p>
                    <p className="text-small text-foreground-500 font-normal">Let us setup the decoys for you</p>
                </Switch>

                <Spacer y={2} />

                <Accordion>
                    <AccordionItem title="Delivery (optional)" subtitle="Click to expand" startContent={<FontAwesomeIcon icon={faTruck} style={{fontSize: 'x-large'}} />}>
                        <Delivery deliveryChanged={props.deliveryChanged} />
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

