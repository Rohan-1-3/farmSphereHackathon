function About(props) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        <section className="text-center py-16">
          <div className="mx-auto w-3/4 md:w-1/2">
            <img
              src="https://media.discordapp.net/attachments/1309018011943829616/1309235299926278255/360_F_419952491_gbqKfi4SPq3U7BQlsDvWt0b087yWOPHv.jpg"
              alt="Agriculture"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <h2 className="mt-6 text-3xl font-semibold">Your Farm, Our Passion</h2>
          <p className="mt-2 text-lg">
            Connecting farmers to innovative solutions for a sustainable future in agriculture.
          </p>
        </section>
  
        <section className="py-12 px-4">
          <h2 className="text-2xl font-bold text-center">About Us</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center">
            Welcome to FarmSphere, a platform dedicated to empowering farmers through technology.
            We provide innovative solutions like weather alerts, farm equipment sharing, expert
            farming advice, and more.
          </p>
        </section>
  
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 text-center">
              <img
                src="https://myflowerland.com/wp-content/uploads/2022/09/Soil-testing-image.jpg"
                alt="Soil Testing"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Soil Testing Service</h3>
              <p>Optimize your crop yields with expert advice and tools.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg350uYwDdY_LZB62fcdqM4sO98F9dYzbpWA&s"
                alt="Equipment Sharing"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Equipment Sharing Marketplace</h3>
              <p>Access and share farming equipment with ease.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 text-center">
              <img
                src="https://thedigitalsyndicate.com/wp-content/uploads/2023/12/dm.jpg"
                alt="Digital Marketplace"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Digital Marketplace</h3>
              <p>Buy and sell farming goods conveniently.</p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default About;About