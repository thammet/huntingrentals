import { faCloudRain, faHammer, faCheck, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardFooter, CardHeader, Chip, Code, Image, Link, Spacer } from "@nextui-org/react";

export default function Landing() {
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Man in field icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="mallard.png"
                        />
                        <p className="text-tiny text-white/60">We've got you covered</p>
                        </div>
                        <Button radius="full" size="sm" as={Link} href="#learn-more">Get Started</Button>
                    </CardFooter>
                </Card>

                <Spacer y={10} />
              
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '100%'}}>
                    <Code color="primary" className="lg:text-xl text-lg"><FontAwesomeIcon icon={faCheck} style={{width: '20px'}} /> Rentals</Code>
                    <Code color="success" className="lg:text-xl text-lg"><FontAwesomeIcon icon={faHammer} style={{width: '20px'}}/> Setup and Teardown</Code>
                    <Code color="secondary" className="lg:text-xl text-lg"><FontAwesomeIcon icon={faCloudRain} style={{width: '20px'}}/> Sunshine or Rain</Code>
                </div>

                <Spacer y={10} />

                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', width: '100%', flexWrap: 'wrap'}}>
                    <Chip color="warning" size="lg" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Decoys</Chip>
                    <Chip color="warning"  size="lg" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>Blinds</Chip>
                    <Chip color="warning"  size="lg" radius="sm" startContent={<FontAwesomeIcon icon={faCheck} />}>ATV</Chip>
                </div>
               
                <Spacer y={10} />

                <div className="text-center text-default-500 text-md lg:text-xl">Learn More <FontAwesomeIcon icon={faAngleDown} /></div>
            </div>
        </div>
    )
}