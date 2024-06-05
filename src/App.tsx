import React, { useState } from 'react';
import './App.css';
import { Offer } from './Models/Offer';
import { Service } from './Models/Service';
import OfferComponent from './Components/OfferComponent/OfferComponent';
import { formatPhoneNumber, uuidv4 } from './Utis';
import { Button, Typography } from '@mui/material';
import { Email, TelephoneNumber } from './Constants';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {offers as offersData} from './Data/Offers'
import {services as servicesData} from './Data/Services'
import ServiceComponent from './Components/ServiceComponent/ServiceComponent';


function App() {
  const [offers, setOffers] = useState<Offer[]>(offersData);
  const [services, _] = useState<Service[]>(servicesData);

  const offerChanged = (offer: Offer) => {
    const index = offers.findIndex(x => x.id === offer.id);
    const offersCpy = [...offers];
    offersCpy.splice(index, 1, offer)
    setOffers(offersCpy)
  }

  return (
    <div>
      <div id="page">
        <div style={{position: 'relative', textAlign: 'center', marginBottom: '50px'}}>
          <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography component="div" style={{color: 'white', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1.5px'}}>
                Kansas City
            </Typography>
            <Typography variant="h3" component="div" style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px'}}>
                Hunting Rentals and Services 
            </Typography>
            <Typography variant="h5" component="div" style={{color: 'white', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1.5px'}}>
                Make the most of your hunting adventures
            </Typography>
          </div>

          <img id="landing-image" src={`${process.env.PUBLIC_URL}/maninfield.png`} />
        </div>

        <div  style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '50px'}}>
          <div style={{textAlign: 'center'}}>
            <Typography variant="h4" component="div" style={{fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px'}}>
                Rentals
            </Typography>
            <Typography color="text.secondary" gutterBottom>
                Customize the quantities of each item and the number of days to get an estimated price.
            </Typography>
          </div>
          <div id="offers-container">
            {offers.map(offer => <OfferComponent key={offer.id} offer={offer} onChange={offerChanged} />)}
          </div>

          <div style={{textAlign: 'center'}}>
            <Typography variant="h4" component="div" style={{fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px'}}>
                Services
            </Typography>
            <Typography color="text.secondary" gutterBottom>
                Whether you are renting from us or have your own eqipment, we offer services to streamline your hunts and make them more successful
            </Typography>
          </div>
          <div id="services-container">
            {services.map(service => <ServiceComponent key={service.id} service={service} />)}
          </div>
        </div>
      </div>

      <div style={{backgroundColor: '#1976d2', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
        <Typography variant="h4" component="div" style={{fontWeight: 'bold', color: 'white'}}>
            Questions?
        </Typography>

        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Button href={`tel:${TelephoneNumber}`} size="small" color="secondary" variant='contained' style={{width: '200px'}}  startIcon={<PhoneIcon />}>{formatPhoneNumber(TelephoneNumber)}</Button>
          <Button href={`mailto:${Email}`} size="small" color="secondary" variant='contained' style={{width: '200px'}}  startIcon={<EmailIcon />}>{Email}</Button>
        </div>
       </div>
    </div>
  );
}

export default App;
