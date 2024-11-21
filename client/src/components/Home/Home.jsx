import React, { useEffect } from 'react';
import Reviews from './Reviews';
import Services from './Services';
import CallToActionButton from '../CallToActionButton';
import Footer from './Footer';
import Hero from './Hero';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();

    useEffect(()=>{
        if(sessionStorage.getItem("signedIn")){
            navigate("/login")
        }
    },[])

    return (
        <div className='main'>
            <Hero className="hero" />
            <Services className="services" />
            <div className='secondary text-center'>
                <Reviews className="reviews" />
            </div>
            <div className="cta-container text-center my-8 ">
                <p className="cta-text mb-4 text-lg text-gray-700 dark:text-white">
                    Take the first step towards smarter farming. Join us and discover solutions tailored for your needs!
                </p>
                <CallToActionButton size='large' text='Join Us Today!' />
            </div>
        </div>
    );
}

export default Home;