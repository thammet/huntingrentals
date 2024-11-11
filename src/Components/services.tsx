import "./services.css"
import { Spacer } from "@nextui-org/react";
import Contact from "./contact";
import Options from "./options";
import { useState } from "react";

const today = new Date();

export default function Services() {
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [delivery, setDelivery] = useState(false);
    const [decoySetup, setDecoySetup] = useState(false);

    return (
        <div>
            <h1 className="text-center font-semibold text-xl text-primary">Services</h1>
            <Spacer y={1} />
            <div className='text-default-1000 font-semibold text-center'>Whether you are renting from us or have your own eqipment, we offer services to streamline your hunts and make them more successful.</div>

            <Spacer y={5} />

            <div style={{display: 'grid', gap: '40px'}}>
                <Options 
                    startDate={startDate} 
                    startDateChanged={setStartDate} 
                    endDate={endDate}
                    endDateChanged={setEndDate}
                    delivery={delivery} 
                    deliveryChanged={setDelivery} 
                    decoySetup={decoySetup} decoySetupChanged={setDecoySetup} 
                />

                <Contact />
            </div>
            
        </div>
    )
}