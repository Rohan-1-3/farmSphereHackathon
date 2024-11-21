import React, { useEffect } from 'react';
import Reviews from './Reviews';
import Services from './Services';
import CallToActionButton from '../CallToActionButton';
import Footer from './Footer';
import Hero from './Hero';
import axios from 'axios';
import './home.css'

function Home(props) {

    return (
        <div className='main'>
            <Hero className = "hero"/>
            <Services className = "services"/>
            <div className='secondary'>
                <Reviews className = "reviews" />
                <CallToActionButton className = "call2action"/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;