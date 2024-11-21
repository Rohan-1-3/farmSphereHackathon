import React from 'react';
import CallToActionButton from '../CallToActionButton';
import { NavLink } from 'react-router-dom';

function Hero(props) {
    return (
        <>
        <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Empowering Farmers with Smart Agricultural Solutions
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Discover innovative technologies to solve agricultural challenges in Nepal. From weather alerts to soil testing, we provide tools to optimize farming and connect farmers with markets.
                </p>
                <div className="flex items-center gap-4">
                    <CallToActionButton />
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-semibold"
                                : "hover:text-blue-500 font-medium text-gray-600"
                        }
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://via.placeholder.com/400x500" alt="mockup" />
            </div>                
        </div>
    </section>  
        </>
    );
}

export default Hero;