function ActivityCreate() {
  return (
    <div className="p-6 w-full max-w-2xl bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Add New Activity</h2>

      <form className="flex flex-col gap-4">
        {/* Activity Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Activity Name
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g., The Museum of Modern Art"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Brief description of the activity"
            className="w-full border border-gray-300 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        {/* Location & Map Link */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g., Manhattan, NYC"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Google Map Link (Optional)
            </label>
            <input
              type="url"
              name="mapUrl"
              placeholder="https://maps.google.com/..."
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
        </div>

        {/* Rating and Duration */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              step="0.1"
              placeholder="e.g., 4.5"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="e.g., 1 Hour"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
        </div>

        {/* What's Included */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What’s Included
          </label>
          <textarea
            name="inclusions"
            rows={2}
            placeholder="e.g., Admission to the Empire State Building"
            className="w-full border border-gray-300 rounded-lg p-2.5"
          />
        </div>

        {/* Price & Time */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (₦)
            </label>
            <input
              type="number"
              name="price"
              placeholder="e.g., 123450"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              type="datetime-local"
              name="startTime"
              className="w-full border border-gray-300 rounded-lg p-2.5"
            />
          </div>
        </div>

        {/* Day Tag (e.g., Day 1, Day 2) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Day Tag
          </label>
          <select
            name="day"
            className="w-full border border-gray-300 rounded-lg p-2.5"
          >
            <option value="">Select Day</option>
            <option value="Day 1">Day 1</option>
            <option value="Day 2">Day 2</option>
            <option value="Day 3">Day 3</option>
            {/* Add more as needed */}
          </select>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition"
          >
            Create Activity
          </button>
        </div>
      </form>
    </div>
  );
}

export default ActivityCreate;
