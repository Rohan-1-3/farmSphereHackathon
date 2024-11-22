const Contact = () => {
  return (
    <div className="container mx-auto my-12 p-6 max-w-lg bg-green-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Contact Us
      </h2>
      <form>
        <div className="form-group mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 dark:bg-gray-700 dark:text-gray-200"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9249193928326!2d85.28720587526195!3d27.688715326313428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d9284b605%3A0xdeff9faa80d88afb!2sAdvanced%20College%20of%20Engg.%20Management!5e0!3m2!1sen!2snp!4v1732203830622!5m2!1sen!2snp"
            width="100%"
            height="300"
            className="rounded-md border border-gray-300 dark:border-gray-600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 dark:bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 dark:hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
