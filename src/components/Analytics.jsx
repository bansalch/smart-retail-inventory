import React from 'react';
import { DollarSign, Package, Percent, Activity } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Revenue */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
          <p className="text-2xl font-bold">$118,209</p>
        </div>
        <DollarSign className="text-green-500 w-6 h-6" />
      </div>

      {/* Units Sold */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">Units Sold</h3>
          <p className="text-2xl font-bold">91</p>
        </div>
        <Package className="text-blue-500 w-6 h-6" />
      </div>

      {/* Forecast Accuracy */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">Forecast Accuracy</h3>
          <p className="text-2xl font-bold">98.5%</p>
        </div>
        <Percent className="text-purple-500 w-6 h-6" />
      </div>

      {/* Turnover Rate */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">Turnover Rate</h3>
          <p className="text-2xl font-bold">19.7x</p>
        </div>
        <Activity className="text-orange-500 w-6 h-6" />
      </div>
    </div>
  );
};

export default Analytics;
