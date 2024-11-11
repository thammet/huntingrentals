import { faCloudRain, faHammer, faCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardFooter, CardHeader, Chip, Code, Image, Link, Spacer } from "@nextui-org/react";

export default function Landing() {
    return (
        <div style={{height: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{flexGrow: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Card className="h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-xl text-black/60 uppercase font-bold">Elevate Your Hunt</p>
                        <h4 className="text-black text-md font-medium">Take your hunt to the next level</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="geeseflying.png"
                    />
                </Card>

                <Spacer y={10} />

                <div>
                    <p className="text-center font-bold text-xl">What are you looking to do?</p>
                    <Spacer y={2} />
                    <p className="text-center text-default-750 font-semibold text-sm">You can rent equipment from us or bring your own and let us deal with the hassle of setting it up.</p>
                    <Spacer y={5} />
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                        <div>
                            <Button as={Link} href="#rentals" color="warning" fullWidth>
                                Rent Equipment
                            </Button>
                            <Spacer y={5} />
                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px'}}>
                                <Chip color="warning" variant="flat" size="sm" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Decoys</Chip>
                                <Chip color="warning" variant="flat" size="sm" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Blinds</Chip>
                                <Chip color="warning" variant="flat" size="sm" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Gear</Chip>
                            </div>
                        </div>
                        <div>
                            <Button as={Link} href="#services" color="primary" fullWidth>
                                Services
                            </Button>

                            <Spacer y={5} />
                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px'}}>
                                <Chip color="primary" variant="flat" size="sm" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Delivery</Chip>
                                <Chip color="primary" variant="flat"  size="sm" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Setup</Chip>
                                <Chip color="primary" variant="flat"  size="sm" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Teardown</Chip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}