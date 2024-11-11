import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AppName } from "../constants";

export default function Nav() {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link className="font-bold text-inherit" color="foreground" href="/">
                    {AppName}
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Link 
                        className="font-bold text-inherit" 
                        color="foreground" 
                        href={`#rentals`}
                    >
                       Rentals
                    </Link>
                    <Link 
                        className="font-bold text-inherit" 
                        color="foreground" 
                        href={`#services`}
                        style={{marginLeft: '15px'}}
                    >
                       Services
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}