import './App.css'
import Landing from "./Components/landing";
import { NextUIProvider, Spacer } from '@nextui-org/react';
import Rentals from './Components/rentals';
import Services from './Components/services';
import { useEffect } from 'react';
import { appInsights } from './app-insights';

export default function App() {
    useEffect(() => {
        appInsights.trackPageView()
    }, [])

    return(
        <NextUIProvider>
            <div style={{padding: '20px', maxWidth: '1000px', margin: 'auto'}}>
                <Landing />

                <div id="learn-more"></div>
                <Spacer y={10} />
                <Rentals />
                <Spacer y={20} />
                <Services />
            </div>
        </NextUIProvider>
        
    )
}