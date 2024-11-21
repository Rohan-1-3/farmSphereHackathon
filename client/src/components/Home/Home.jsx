import React, { useEffect } from 'react';
import Reviews from './Reviews';
import Services from './Services';
import CallToActionButton from '../CallToActionButton';
import Footer from './Footer';
import Hero from './Hero';
import axios from 'axios';

function Home(props) {

    return (
        <div>
            <Hero />
            <Services />
            <div>
                <Reviews />
                <CallToActionButton />
            </div>
            <Footer />
        </div>
    );
}

export default Home;