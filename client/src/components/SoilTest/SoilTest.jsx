import { useState, useEffect } from "react";

const SoilTest = () => {
  const [formData, setFormData] = useState({
    userId: "",
    phone: "",
    location: "",
    sessionDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Automatically fill name and email from localStorage
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user"));

    const savedId = data.id;

    if (savedId) {
      setFormData((prevData) => ({
        ...prevData,
        userId: savedId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    console.log(formData)
    try {
      const response = await fetch("http://localhost:5000/soil-testing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          userId: "",
          phone: "",
          location: "",
          sessionDate: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Soil Sampling and Analysis
      </h1>
      <p className="text-gray-600 text-center mb-6">
        We analyze soil samples to determine the best crops, vegetables, fruits,
        and pH range for your land. Book a session today to get an online report
        on your soil's farming potential.
      </p>
      
      {/* Success message */}
      {success && (
        <div className="mb-4 text-green-600 text-center">
          Your session has been booked successfully!
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="mb-4 text-red-600 text-center">
          {error}
        </div>
      )}
      
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="text-black">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div className="text-black">
          <label
            htmlFor="sessionDate"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Session Date
          </label>
          <input
            type="date"
            name="sessionDate"
            id="sessionDate"
            value={formData.sessionDate}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Session"}
        </button>
      </form>
    </div>
  );
};

export default SoilTest;
