import { useState } from 'react';

export default function SettingsModal({ currentSettings, onSave, onClose }) {
  const [tempSettings, setTempSettings] = useState(currentSettings);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTempSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    onSave(tempSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Settings</h2>
          <button onClick={onClose} className="text-2xl font-bold hover:text-gray-700" aria-label="Close">
            &times;
          </button>
        </div>
        <section className="mb-6">
          <h3 className="font-semibold mb-2">Time Format</h3>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="timeFormat"
              value="12-hour"
              checked={tempSettings.timeFormat === '12-hour'}
              onChange={handleChange}
              className="form-radio text-green-600"
            />
            <span>12-Hour</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="radio"
              name="timeFormat"
              value="24-hour"
              checked={tempSettings.timeFormat === '24-hour'}
              onChange={handleChange}
              className="form-radio text-green-600"
            />
            <span>24-Hour</span>
          </label>
        </section>
        <section className="mb-6">
          <h3 className="font-semibold mb-2">Theme</h3>
          <select
            name="theme"
            value={tempSettings.theme}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-32 bg-gray-100"
          >
            <option value="light">Light (default)</option>
            <option value="dark">Dark Mode</option>
          </select>
        </section>
        <section className="mb-6">
          <h3 className="font-semibold mb-2">Time Zone</h3>
          <select
            name="timeZone"
            value={tempSettings.timeZone}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full bg-gray-100"
          >
            <option value="Europe/London">London, UK (UTC+1)</option>
            <option value="Africa/Lagos">Lagos, Nigeria (WAT)</option>
            <option value="America/New_York">New York, USA (EST)</option>
            <option value="America/Los_Angeles">Los Angeles, USA (PST)</option>
          </select>
        </section>
        <section className="mb-6 flex items-center justify-between">
          <h3 className="font-semibold">Show Date</h3>
          <label htmlFor="toggleShowDate" className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              id="toggleShowDate"
              name="showDate"
              checked={tempSettings.showDate}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
          </label>
        </section>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-800 rounded-lg px-6 py-2 hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}