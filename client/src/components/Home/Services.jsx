import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

function Services(props) {
    const servicesData = [
        {   
            "id" : 1,
            "title": "Weather Alerts",
            "description": "Gives weather alerts to farmers to optimize farming",
            "route": "/weather",
            "image": ""
        },
        {
            "id" : 2,
            "title": "Marketplace for Farmers and Customers",
            "description": "Connects farmers directly to customers, reducing middlemen and providing fair prices",
            "route": "/marketplace",
            "image": ""
        },
        {
            "id" : 3,
            "title": "Real-Time Farming Tips and Government Schemes",
            "description": "Provides farming tips, government scheme updates, and tax updates in real-time",
            "route": "/farming-tips",
            "image": ""
        },
        {
            "id" : 4,
            "title": "Minimizing Middlemen",
            "description": "Facilitates direct transactions between farmers and buyers, improving transparency",
            "route": "/direct-transactions",
            "image": ""
        },
        {
            "id" : 5,
            "title": "Easy Loan Access for Farmers",
            "description": "Offers easy access to farming loans with minimal paperwork and quick approvals",
            "route": "/easy-loans",
            "image": ""
        },
        {
            "id" : 6,
            "title": "Soil Testing",
            "description": "Enables farmers to test soil quality for better crop yield and sustainable farming",
            "route": "/soil-testing",
            "image": ""
        }
    ];    

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;