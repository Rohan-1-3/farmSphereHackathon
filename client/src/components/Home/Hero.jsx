import React from 'react';
import CallToActionButton from '../CallToActionButton';
import HeroImage from "../../assets/hero-image.jpg";

function Hero(props) {
    return (
        <section 
            className="bg-white dark:bg-gray-900 relative text-white" 
            style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        >
            <div className="text-center grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-w-screen-xl">
                <div className="lg:col-span-12">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Empowering Farmers with Smart Agricultural Solutions
                    </h1>
                    <p className="mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
                        Discover innovative technologies to solve agricultural challenges in Nepal. From weather alerts to soil testing, we provide tools to optimize farming and connect farmers with markets.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <CallToActionButton size='large'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
