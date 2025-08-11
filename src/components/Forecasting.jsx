import React from 'react';
import { CalendarDays, LineChart, TrendingUp } from 'lucide-react';

const Forecasting = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Forecasting Overview</h2>
        <CalendarDays className="text-indigo-500 w-6 h-6" />
      </div>

      <div className="text-gray-600 text-sm">
        Based on historical trends, demand for the next 30 days is expected to remain stable with a slight upward curve.
      </div>

      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-green-500 w-5 h-5" />
          <span>Projected Sales: <strong>105 units</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <LineChart className="text-blue-500 w-5 h-5" />
          <span>Confidence: <strong>96%</strong></span>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;
