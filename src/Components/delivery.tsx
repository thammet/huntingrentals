import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { BaseDeliveryCharge } from "../constants";
import { appInsights } from "../app-insights";

export default function Delivery(props: {deliveryChanged: any}) {
    const [address, setAddress] = useState('');

    useEffect(() => {
        props.deliveryChanged(address != '')
    }, [address])

    useEffect(() => {
        appInsights.trackEvent({
            name: 'Delivery expanded'
        })
    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <Input 
                label="Address"
                value={address} 
                onValueChange={setAddress}
            />
            <Input 
                label="City"
            />
            <Autocomplete
                label="State"
            >
                {states.map(state => (
                    <AutocompleteItem key={state} value={state}>{state}</AutocompleteItem>
                ))}
            </Autocomplete>
            <Input 
                label="Zip"
                type="number"
            />

            <div className="border px-4 py-3 rounded-xl text-center [&>p]:m-0 border-warning-100 bg-warning-50/20 my-2">
                Note: Delivery up to 50 miles away. 
                <br/>
                We have a base charge of ${BaseDeliveryCharge}, but it could be more if farther away. 
            </div>
        </div>
    )
}

const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", 
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];