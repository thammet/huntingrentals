import { Typography } from "@mui/material";
import { Service } from "../../Models/Service";

export default function ServiceComponent(props: {service: Service}) {
    return (
        <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', border: 'solid black 1px', borderRadius: '10px', 'boxShadow': '0px 0px 15px -3px grey', padding: '20px', width: '350px'}}>
            <props.service.icon  fontSize="large"/>
            
            <Typography variant="h5" component="div">
                {props.service.name}
            </Typography>

            <Typography color="text.secondary">
                {props.service.description}
            </Typography>
        </div>
    )
}