import { useState } from "react";

import { useGlobalContext } from "@/providers/global.context";
import { generateId } from "../plan.constant";

function FlightCreate() {
  const { addFlight } = useGlobalContext();

  const [form, setForm] = useState({
    id: generateId(),
    name: "",
    code: "",
    durationMins: 0,
    suite: "",
    startTime: "",
    endTime: "",
    price: 0,
    loadWeightKg: 0,
    cabinBaggageWeightKg: 0,
    from: "",
    to: "",
  });

  return (
    <div className="p-6 w-full max-w-3xl bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Add New Flight</h2>

      <form className="flex flex-col gap-4">
        {/* Airline & Flight Code */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Airline Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., American Airlines"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Flight Code
            </label>
            <input
              type="text"
              name="code"
              placeholder="e.g., AA 233"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              value={form.code}
            />
          </div>
        </div>

        {/* Suite/Seat Type */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Suite / Class
          </label>
          <select
            name="suite"
            className="w-full border border-gray-300 rounded-lg p-2.5"
            onChange={(e) => setForm({ ...form, suite: e.target.value })}
            value={form.suite}
          >
            <option value="">Select class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>

        {/* From & To */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              From (Airport Code)
            </label>
            <input
              type="text"
              name="from"
              placeholder="e.g., LOS"
              className="w-full border border-gray-300 rounded-lg p-2.5 uppercase"
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              value={form.from}
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              To (Airport Code)
            </label>
            <input
              type="text"
              name="to"
              placeholder="e.g., JFK"
              className="w-full border border-gray-300 rounded-lg p-2.5 uppercase"
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              value={form.to}
            />
          </div>
        </div>

        {/* Start Time & End Time */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Departure Time
            </label>
            <input
              type="datetime-local"
              name="startTime"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              onChange={(e) => setForm({ ...form, startTime: e.target.value })}
              value={form.startTime}
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Arrival Time
            </label>
            <input
              type="datetime-local"
              name="endTime"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              onChange={(e) => setForm({ ...form, endTime: e.target.value })}
              value={form.endTime}
            />
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Flight Duration (in minutes)
          </label>
          <input
            type="number"
            name="durationMins"
            placeholder="e.g., 380"
            className="w-full border border-gray-300 rounded-lg p-2.5"
            onChange={(e) =>
              setForm({ ...form, durationMins: +e.target.value })
            }
            value={form.durationMins}
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Ticket Price (₦)
          </label>
          <input
            type="number"
            name="price"
            placeholder="e.g., 145000"
            className="w-full border border-gray-300 rounded-lg p-2.5"
            onChange={(e) => setForm({ ...form, price: +e.target.value })}
            value={form.price}
          />
        </div>

        {/* Baggage Info */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Checked Baggage (kg)
            </label>
            <input
              type="number"
              name="loadWeightKg"
              placeholder="e.g., 25"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              onChange={(e) =>
                setForm({ ...form, loadWeightKg: +e.target.value })
              }
              value={form.loadWeightKg}
            />
          </div>
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Cabin Baggage (kg)
            </label>
            <input
              type="number"
              name="cabinBaggageWeightKg"
              placeholder="e.g., 8"
              className="w-full border border-gray-300 rounded-lg p-2.5"
              onChange={(e) =>
                setForm({ ...form, cabinBaggageWeightKg: +e.target.value })
              }
              value={form.cabinBaggageWeightKg}
            />
          </div>
        </div>

        {/* Facilities */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            In-flight Facilities
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="entertainment" />
              Entertainment
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="meal" />
              Meal
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="usb" />
              USB Port
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="button"
            className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition"
            onClick={(e) => {
              e.preventDefault();
              addFlight(form);
            }}
          >
            Create Flight
          </button>
        </div>
      </form>
    </div>
  );
}

export default FlightCreate;
