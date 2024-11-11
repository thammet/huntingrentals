import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";
import { appInsights } from "../app-insights";

export default function Contact() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        if(!isOpen) return;
        appInsights.trackEvent({
            name: 'Contact'
        }) 
    }, [isOpen])

    return (
        <div>
            <Button 
                color="primary" 
                fullWidth 
                startContent={<FontAwesomeIcon icon={faCalendar}/>}
                onClick={onOpen}
            >
                Schedule Reservation
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" placement="center">
                <ModalContent>
                    {(onClose) => (
                       <>
                       <ModalHeader>Schedule Reservation</ModalHeader>
                       <ModalBody>
                         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                            <div className="border px-4 py-3 rounded-xl text-center [&>p]:m-0 border-warning-100 bg-warning-50/20 my-2">
                                Sorry!

                                There are currently no availabilities. 

                                Please check again later. 
                            </div>
                        </div>
                       </ModalBody>

                        <ModalFooter>
                            <Button color="primary" isDisabled startContent={<FontAwesomeIcon icon={faCalendar}/>}>Schedule</Button>
                            <Button color="danger" onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                       </>
                    )}
                </ModalContent>
            </Modal>
            {/* <Button color='primary' fullWidth startContent={<FontAwesomeIcon icon={faPhone}/>} as={Link} href={`tel:${Phone}`}>{Phone}</Button>
            <Spacer y={3} />
            <Button color='secondary' fullWidth startContent={<FontAwesomeIcon icon={faEnvelope}/>} as={Link} href={`mailto:${Email}`}>{Email}</Button> */}
        </div>
    )
}