import React from 'react';

function ServiceCard({service}) {
    return (
        <div>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                    src={`${service.image === "" ? "https://via.placeholder.com/300" : service.image}`} 
                    alt="Service Image" 
                    className="w-full h-48 rounded-t-lg object-cover" 
                />
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                    <p className="text-gray-600 mb-4">
                        {service.description}
                    </p>
                    <a 
                        href={`${service.route}`}
                        className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>      
        </div>
    );
}

export default ServiceCard;