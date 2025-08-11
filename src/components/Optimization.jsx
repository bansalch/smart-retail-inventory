import React from 'react';
import { Settings, Warehouse, AlertCircle } from 'lucide-react';

const Optimization = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Inventory Optimization</h2>
        <Settings className="text-rose-500 w-6 h-6" />
      </div>

      <p className="text-gray-600 text-sm">
        Inventory levels are currently optimal. No reorder is required for the next 2 weeks.
      </p>

      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Warehouse className="text-yellow-500 w-5 h-5" />
          <span>Current Stock: <strong>45 units</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <AlertCircle className="text-red-500 w-5 h-5" />
          <span>Low Threshold: <strong>20 units</strong></span>
        </div>
      </div>
    </div>
  );
};

export default Optimization;
