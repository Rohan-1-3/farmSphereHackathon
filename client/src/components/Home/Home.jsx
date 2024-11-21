import React, { useEffect } from 'react';
import Reviews from './Reviews';
import Services from './Services';
import CallToActionButton from '../CallToActionButton';
import Footer from './Footer';
import Hero from './Hero';
import axios from 'axios';

function Home(props) {

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:5000/home')
          .then(response => {
            console.log(response.data);  // Save backend response
          })
          .catch(error => {
            console.error('There was an error fetching data!', error);
          });
      }, []);

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