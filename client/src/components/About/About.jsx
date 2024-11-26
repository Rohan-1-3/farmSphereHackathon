import React from "react";


function About(props) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-16 animate-fadeIn relative">
  <div className="mx-auto w-full md:w-full relative">
    <img
      src="https://wallpaperaccess.com/full/1598224.jpg"
      alt="Agriculture"
      className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg"
    />
    {/* Floating Text */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F9F3E1] text-5xl md:text-7xl lg:text-8xl font-bold">
  <h1>Your Farm, Our Passion</h1>
</div>
 

    
  </div>
</section>


      {/* About Section */}
      <section className="py-12 px-4 animate-slideUp">
        <h2 className="text-2xl font-bold text-center">About Us</h2>
        <p className="mt-4 max-w-3xl mx-auto text-center">
          Welcome to FarmSphere, a platform dedicated to empowering farmers through technology.
          We provide innovative solutions like weather alerts, farm equipment sharing, expert
          farming advice, and more.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center animate-slideUp">Our Services</h2>
        <div className="mt-8 overflow-x-auto whitespace-nowrap px-4 max-w-5xl mx-auto flex space-x-4">
          {/* Service Cards */}
          {[
            {
              title: "Soil Testing Service",
              description: "Optimize your crop yields with expert advice and tools.",
              imgSrc: "https://myflowerland.com/wp-content/uploads/2022/09/Soil-testing-image.jpg",
            },
            {
              title: "Equipment Sharing Marketplace",
              description: "Access and share farming equipment with ease.",
              imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg350uYwDdY_LZB62fcdqM4sO98F9dYzbpWA&s",
            },
            {
              title: "Digital Marketplace",
              description: "Buy and sell farming goods conveniently.",
              imgSrc: "https://thedigitalsyndicate.com/wp-content/uploads/2023/12/dm.jpg",
            },
            {
              title: "Weather Information",
              description: "Stay updated with real-time weather alerts and forecasts.",
              imgSrc: "https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgHaEc?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
            {
              title: "Knowledge Portal",
              description: "Access a wealth of farming knowledge and resources.",
              imgSrc: "https://th.bing.com/th/id/OIP.nwdNCOaPa1NGsFzk8wRt2QHaEm?w=311&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
            {
              title: "Easy Loan Service",
              description: "Get quick and secure loans to support your farming needs.",
              imgSrc: "https://th.bing.com/th/id/OIP.R0J6lGkkjPRzen_coAVZHAHaE7?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 text-center flex-shrink-0 w-64 md:w-72 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeIn overflow-hidden"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
