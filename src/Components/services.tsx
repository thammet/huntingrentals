import "./services.css"
import { faHammer, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Spacer } from "@nextui-org/react";
import Contact from "./contact";

export default function Services() {
    return (
        <div>
            <h1 className="text-center font-semibold text-xl text-warning">Services</h1>
            <Spacer y={1} />
            <div className='text-default-1000 font-semibold text-center'>Whether you are renting from us or have your own eqipment, we offer services to streamline your hunts and make them more successful</div>

            <Spacer y={5} />

            <div id="card-container">
                <Card>
                    <CardBody>
                        <div style={{display: 'flex', alignItems: 'center', gap: '30px', padding: '20px'}}>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faTruck} style={{fontSize: 'xxx-large'}}/>
                                <Spacer y={3} />
                                <p className="text-tiny uppercase font-bold">Delivery</p>
                            </div>
                            <div>
                                Don't have a truck or trailer? No problem! We can deliver the equipment and pick it up.
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div style={{display: 'flex', alignItems: 'center', gap: '30px', padding: '20px', flexDirection: 'row-reverse'}}>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faHammer} style={{fontSize: 'xxx-large'}}/>
                                <Spacer y={3} />
                                <p className="text-tiny uppercase font-bold" style={{whiteSpace: 'nowrap'}}>Decoy Setup</p>
                            </div>
                            <div>
                                Setting up 100s of decoys can be a pain. We'll do it for you!
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <Spacer y={10} />
            <Contact />
        </div>
    )
}