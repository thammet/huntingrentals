import './App.css'
import Landing from "./Components/landing";
import { Link, NextUIProvider, Spacer } from '@nextui-org/react';
import Rentals from './Components/rentals';
import Services from './Components/services';
import { useEffect } from 'react';
import { appInsights } from './app-insights';
import Nav from './Components/nav-bar';
import { Email } from './constants';

export default function App() {
    useEffect(() => {
        appInsights.trackPageView()
    }, [])

    return(
        <NextUIProvider>
            <div style={{padding: '20px', maxWidth: '1000px', margin: 'auto'}}>
                <Nav />
                <Landing />

                <div id="learn-more"></div>
                <div id="rentals" style={{paddingTop: '75px'}}>
                    <Rentals />
                </div>

                <Spacer y={32} />

                <div id="services" style={{paddingTop: '75px'}}>
                    <Services />
                </div>

                <Spacer y={16} />
                <div className='text-center'>
                    <Link href={`mailto:${Email}`}>Contact Support</Link>
                </div>
                <Spacer y={5} />
            </div>
        </NextUIProvider>
        
    )
}