import Analytics from './Analytics';
import Forecasting from './Forecasting';
import Optimization from './Optimization';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Smart Retail Inventory System</h1>
        <p className="mt-2 text-gray-600 text-lg">
          AI-powered demand forecasting and inventory optimization
        </p>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Analytics Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>
          <Analytics />
        </div>

        {/* Forecasting Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Forecasting</h2>
          <Forecasting />
        </div>

        {/* Optimization Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Optimization</h2>
          <Optimization />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
