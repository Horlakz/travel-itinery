function HotelCreate() {
  return (
    <div className="p-6 w-full max-w-2xl bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Add New Hotel</h2>

      <form className="flex flex-col gap-4">
        {/* Hotel Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hotel Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g., Riviera Resort"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            name="address"
            rows={3}
            placeholder="Full hotel address"
            className="w-full border border-gray-300 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        {/* Location (Map Link) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Google Map Link (Optional)
          </label>
          <input
            type="url"
            name="mapUrl"
            placeholder="https://maps.google.com/..."
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        {/* Rating & Room Type */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              placeholder="e.g., 8.5"
              step="0.1"
              min="0"
              max="10"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Type
            </label>
            <input
              type="text"
              name="roomType"
              placeholder="e.g., King size room"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        {/* Facilities */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Facilities
          </label>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="facilities" value="pool" />
              Pool
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="facilities" value="bar" />
              Bar
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="facilities" value="gym" />
              Gym
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="facilities" value="spa" />
              Spa
            </label>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per Night (₦)
            </label>
            <input
              type="number"
              name="price"
              placeholder="e.g., 123450"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Price
            </label>
            <input
              type="number"
              name="totalPrice"
              placeholder="e.g., 560000"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        {/* Check-in / Check-out */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-In Date
            </label>
            <input
              type="date"
              name="checkIn"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-Out Date
            </label>
            <input
              type="date"
              name="checkOut"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition"
          >
            Create Hotel
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelCreate;
