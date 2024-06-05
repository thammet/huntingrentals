import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export interface Service {
    id: string,
    name: string,
    description: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    price?: number
}