import { Service } from "../Models/Service";
import { uuidv4 } from "../Utis";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';

export const services: Service[] = [
    {
        id: uuidv4(),
        name: 'Delivery & Pickup',
        description: "Don't have a truck or trailer? No problem! We can deliver the equipment and pick it up.",
        icon: LocalShippingIcon
    },
    {
        id: uuidv4(),
        name: 'Decoy Setup & Teardown',
        description: 'Setting up 100s of decoys can be a pain. Let us do it for you!',
        icon: ConstructionIcon
    }
]