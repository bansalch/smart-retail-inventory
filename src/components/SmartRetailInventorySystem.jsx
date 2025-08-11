import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, Area, AreaChart } from 'recharts';
import { TrendingUp, Package, AlertTriangle, DollarSign, Activity, Target, Zap, BarChart3 } from 'lucide-react';

const SmartRetailInventorySystem = () => {
  const [selectedProduct, setSelectedProduct] = useState('laptop');
  const [timeRange, setTimeRange] = useState('30');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample product data with diverse retail categories
  const products = {
    // Electronics
    laptop: {
      name: 'Gaming Laptop Pro',
      category: 'Electronics',
      currentStock: 45,
      reorderPoint: 20,
      maxStock: 100,
      unitCost: 899,
      sellingPrice: 1299,
      leadTime: 7,
      seasonal: false,
      perishable: false
    },
    smartphone: {
      name: 'Smart Phone X',
      category: 'Electronics', 
      currentStock: 12,
      reorderPoint: 25,
      maxStock: 80,
      unitCost: 599,
      sellingPrice: 899,
      leadTime: 5,
      seasonal: false,
      perishable: false
    },
    
    // Fashion & Apparel
    jeans: {
      name: 'Premium Denim Jeans',
      category: 'Fashion',
      currentStock: 156,
      reorderPoint: 40,
      maxStock: 300,
      unitCost: 35,
      sellingPrice: 89,
      leadTime: 14,
      seasonal: true,
      perishable: false
    },
    winterCoat: {
      name: 'Winter Parka Coat',
      category: 'Fashion',
      currentStock: 23,
      reorderPoint: 15,
      maxStock: 80,
      unitCost: 95,
      sellingPrice: 249,
      leadTime: 21,
      seasonal: true,
      perishable: false
    },
    sneakers: {
      name: 'Athletic Sneakers',
      category: 'Fashion',
      currentStock: 89,
      reorderPoint: 35,
      maxStock: 200,
      unitCost: 45,
      sellingPrice: 129,
      leadTime: 10,
      seasonal: false,
      perishable: false
    },
    
    // Food & Beverages
    coffee: {
      name: 'Premium Coffee Beans',
      category: 'Food & Beverage',
      currentStock: 234,
      reorderPoint: 100,
      maxStock: 500,
      unitCost: 8.50,
      sellingPrice: 18.99,
      leadTime: 3,
      seasonal: false,
      perishable: true,
      shelfLife: 180 // days
    },
    organicMilk: {
      name: 'Organic Whole Milk',
      category: 'Food & Beverage',
      currentStock: 67,
      reorderPoint: 80,
      maxStock: 200,
      unitCost: 2.89,
      sellingPrice: 5.49,
      leadTime: 1,
      seasonal: false,
      perishable: true,
      shelfLife: 14 // days
    },
    chocolates: {
      name: 'Artisan Chocolates',
      category: 'Food & Beverage',
      currentStock: 145,
      reorderPoint: 50,
      maxStock: 300,
      unitCost: 4.25,
      sellingPrice: 12.99,
      leadTime: 5,
      seasonal: true, // High demand during holidays
      perishable: true,
      shelfLife: 365
    },
    
    // Home & Garden
    coffeeMaker: {
      name: 'Smart Coffee Maker',
      category: 'Home & Kitchen',
      currentStock: 28,
      reorderPoint: 15,
      maxStock: 60,
      unitCost: 78,
      sellingPrice: 149,
      leadTime: 8,
      seasonal: false,
      perishable: false
    },
    gardenTools: {
      name: 'Garden Tool Set',
      category: 'Home & Garden',
      currentStock: 41,
      reorderPoint: 20,
      maxStock: 80,
      unitCost: 32,
      sellingPrice: 79,
      leadTime: 12,
      seasonal: true, // Spring/Summer peak
      perishable: false
    },
    bedSheets: {
      name: 'Luxury Bed Sheet Set',
      category: 'Home & Kitchen',
      currentStock: 73,
      reorderPoint: 25,
      maxStock: 150,
      unitCost: 28,
      sellingPrice: 89,
      leadTime: 7,
      seasonal: false,
      perishable: false
    },
    
    // Health & Beauty
    shampoo: {
      name: 'Organic Shampoo',
      category: 'Health & Beauty',
      currentStock: 188,
      reorderPoint: 75,
      maxStock: 350,
      unitCost: 6.50,
      sellingPrice: 16.99,
      leadTime: 4,
      seasonal: false,
      perishable: true,
      shelfLife: 730
    },
    vitamins: {
      name: 'Daily Multivitamins',
      category: 'Health & Beauty',
      currentStock: 95,
      reorderPoint: 40,
      maxStock: 200,
      unitCost: 12.50,
      sellingPrice: 29.99,
      leadTime: 6,
      seasonal: true, // Higher demand in winter
      perishable: true,
      shelfLife: 1095 // 3 years
    },
    
    // Sports & Outdoors
    yogaMat: {
      name: 'Premium Yoga Mat',
      category: 'Sports & Outdoors',
      currentStock: 52,
      reorderPoint: 20,
      maxStock: 100,
      unitCost: 18,
      sellingPrice: 49,
      leadTime: 9,
      seasonal: true, // New Year fitness resolutions
      perishable: false
    },
    bicycle: {
      name: 'Mountain Bike',
      category: 'Sports & Outdoors',
      currentStock: 8,
      reorderPoint: 5,
      maxStock: 25,
      unitCost: 450,
      sellingPrice: 899,
      leadTime: 21,
      seasonal: true, // Spring/Summer peak
      perishable: false
    },
    
    // Books & Media
    cookbook: {
      name: 'Gourmet Cookbook',
      category: 'Books & Media',
      currentStock: 127,
      reorderPoint: 30,
      maxStock: 200,
      unitCost: 8.99,
      sellingPrice: 24.99,
      leadTime: 5,
      seasonal: true, // Holiday gift season
      perishable: false
    },
    
    // Toys & Games
    boardGame: {
      name: 'Strategy Board Game',
      category: 'Toys & Games',
      currentStock: 64,
      reorderPoint: 25,
      maxStock: 120,
      unitCost: 22,
      sellingPrice: 54.99,
      leadTime: 10,
      seasonal: true, // Holiday peak
      perishable: false
    },
    
    // Automotive
    carTires: {
      name: 'All-Season Car Tires',
      category: 'Automotive',
      currentStock: 32,
      reorderPoint: 16,
      maxStock: 80,
      unitCost: 95,
      sellingPrice: 189,
      leadTime: 14,
      seasonal: true, // Seasonal tire changes
      perishable: false
    },
    
    // Pet Supplies
    dogFood: {
      name: 'Premium Dog Food',
      category: 'Pet Supplies',
      currentStock: 78,
      reorderPoint: 40,
      maxStock: 150,
      unitCost: 15.50,
      sellingPrice: 34.99,
      leadTime: 4,
      seasonal: false,
      perishable: true,
      shelfLife: 547 // 18 months
    }
  };

  // Generate realistic historical sales data with category-specific patterns
  const generateHistoricalData = (productKey, days = 30) => {
    const data = [];
    const product = products[productKey];
    
    // Category-based baseline sales patterns
    const categoryBaselines = {
      'Electronics': { daily: 8, volatility: 0.4 },
      'Fashion': { daily: 15, volatility: 0.6 },
      'Food & Beverage': { daily: 25, volatility: 0.3 },
      'Home & Kitchen': { daily: 12, volatility: 0.4 },
      'Home & Garden': { daily: 8, volatility: 0.5 },
      'Health & Beauty': { daily: 18, volatility: 0.3 },
      'Sports & Outdoors': { daily: 10, volatility: 0.5 },
      'Books & Media': { daily: 14, volatility: 0.4 },
      'Toys & Games': { daily: 11, volatility: 0.6 },
      'Automotive': { daily: 4, volatility: 0.7 },
      'Pet Supplies': { daily: 16, volatility: 0.3 }
    };
    
    const baseline = categoryBaselines[product.category] || { daily: 10, volatility: 0.4 };
    
    // Price point adjustment (higher price = lower volume)
    const priceAdjustment = Math.max(0.3, Math.min(2.0, 100 / product.sellingPrice));
    const baselineDaily = baseline.daily * priceAdjustment;
    
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      // Weekend patterns (varies by category)
      let weekendFactor = 1.0;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      if (product.category === 'Fashion' || product.category === 'Electronics') {
        weekendFactor = isWeekend ? 1.4 : 1.0;
      } else if (product.category === 'Food & Beverage') {
        weekendFactor = isWeekend ? 1.2 : 1.0;
      } else if (product.category === 'Automotive') {
        weekendFactor = isWeekend ? 0.3 : 1.0; // Much lower on weekends
      }
      
      // Seasonal patterns
      let seasonalFactor = 1.0;
      if (product.seasonal) {
        const month = date.getMonth();
        if (product.category === 'Fashion' && productKey === 'winterCoat') {
          // Winter coat peaks in Oct-Feb
          seasonalFactor = [1.8, 2.0, 1.2, 0.8, 0.4, 0.2, 0.1, 0.2, 0.6, 1.4, 1.6, 1.8][month];
        } else if (product.category === 'Home & Garden') {
          // Garden tools peak in Mar-Jun
          seasonalFactor = [0.3, 0.4, 1.2, 1.8, 2.0, 1.8, 1.4, 1.0, 0.8, 0.6, 0.4, 0.3][month];
        } else if (product.category === 'Toys & Games') {
          // Toys peak in Nov-Dec
          seasonalFactor = [0.6, 0.5, 0.7, 0.8, 0.9, 0.8, 0.7, 0.8, 0.9, 1.2, 1.8, 2.2][month];
        } else if (productKey === 'chocolates') {
          // Chocolates peak around holidays
          seasonalFactor = [0.8, 1.4, 0.9, 1.0, 1.2, 0.8, 0.7, 0.8, 0.9, 1.3, 1.6, 2.0][month];
        } else if (productKey === 'yogaMat') {
          // Fitness equipment peaks in Jan (New Year) and May (summer prep)
          seasonalFactor = [2.0, 1.4, 1.0, 0.9, 1.3, 1.1, 0.8, 0.7, 0.8, 0.9, 1.0, 1.2][month];
        }
      }
      
      // Monthly trend for non-seasonal items
      const monthlyTrend = product.seasonal ? 1.0 : 1 + 0.1 * Math.sin((date.getDate() / 30) * Math.PI);
      
      // Perishable items have more consistent demand
      const perishableStability = product.perishable ? 0.8 : 1.0;
      
      // Random factor with category-specific volatility
      const randomFactor = 0.7 + Math.random() * (baseline.volatility * 2);
      
      const actualSales = Math.round(
        baselineDaily * 
        weekendFactor * 
        seasonalFactor * 
        monthlyTrend * 
        randomFactor * 
        perishableStability
      );
      
      const predicted = Math.round(actualSales * (0.85 + Math.random() * 0.3));
      
      // Stock calculation considering turnover
      const stockReduction = (days - i) * (actualSales / 5) + Math.random() * 5;
      const calculatedStock = Math.max(0, product.currentStock - stockReduction);
      
      data.push({
        date: date.toISOString().split('T')[0],
        actualSales: Math.max(0, actualSales),
        predictedSales: Math.max(0, predicted),
        stock: Math.round(calculatedStock),
        revenue: actualSales * product.sellingPrice,
        margin: (actualSales * (product.sellingPrice - product.unitCost))
      });
    }
    return data;
  };

  // AI-powered demand forecasting simulation
  const forecastDemand = (historicalData, forecastDays = 7) => {
    const forecast = [];
    const recent = historicalData.slice(-7);
    const avgSales = recent.reduce((sum, day) => sum + day.actualSales, 0) / recent.length;
    const trend = (recent[recent.length - 1].actualSales - recent[0].actualSales) / recent.length;
    
    for (let i = 1; i <= forecastDays; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      
      const seasonality = 1 + 0.1 * Math.sin((date.getDay() / 7) * 2 * Math.PI);
      const predictedSales = Math.max(0, Math.round((avgSales + trend * i) * seasonality));
      const confidence = Math.max(0.6, 1 - (i * 0.05)); // Decreasing confidence over time
      
      forecast.push({
        date: date.toISOString().split('T')[0],
        predictedSales,
        confidence: confidence * 100,
        upperBound: Math.round(predictedSales * (1 + (1 - confidence) * 0.5)),
        lowerBound: Math.round(predictedSales * (1 - (1 - confidence) * 0.5))
      });
    }
    return forecast;
  };

  // Inventory optimization calculations
  const optimizeInventory = (product, historicalData, forecast) => {
    const avgDailySales = historicalData.slice(-7).reduce((sum, day) => sum + day.actualSales, 0) / 7;
    const safetyStock = Math.ceil(avgDailySales * Math.sqrt(product.leadTime) * 1.65); // 95% service level
    const reorderQuantity = Math.ceil(avgDailySales * product.leadTime + safetyStock);
    
    const projectedStockout = Math.max(0, 7 - Math.floor(product.currentStock / avgDailySales));
    const overstockDays = product.currentStock > product.maxStock * 0.8 ? 
      Math.floor((product.currentStock - product.maxStock * 0.8) / avgDailySales) : 0;
    
    return {
      recommendedReorder: reorderQuantity,
      safetyStock,
      projectedStockoutDays: projectedStockout,
      overstockDays,
      turnoverRate: (avgDailySales * 365) / product.currentStock,
      status: product.currentStock <= product.reorderPoint ? 'REORDER_NOW' : 
              product.currentStock > product.maxStock * 0.8 ? 'OVERSTOCK' : 'OPTIMAL'
    };
  };

  const historicalData = useMemo(() => generateHistoricalData(selectedProduct, parseInt(timeRange)), [selectedProduct, timeRange]);
  const forecast = useMemo(() => forecastDemand(historicalData), [historicalData]);
  const optimization = useMemo(() => optimizeInventory(products[selectedProduct], historicalData, forecast), [selectedProduct, historicalData, forecast]);

  // Calculate KPIs
  const kpis = useMemo(() => {
    const totalRevenue = historicalData.reduce((sum, day) => sum + day.revenue, 0);
    const totalSales = historicalData.reduce((sum, day) => sum + day.actualSales, 0);
    const avgAccuracy = historicalData.reduce((sum, day) => {
      const accuracy = 1 - Math.abs(day.actualSales - day.predictedSales) / Math.max(day.actualSales, 1);
      return sum + accuracy;
    }, 0) / historicalData.length;
    
    return {
      revenue: totalRevenue,
      unitsSold: totalSales,
      forecastAccuracy: avgAccuracy * 100,
      stockEfficiency: optimization.turnoverRate
    };
  }, [historicalData, optimization]);

  const StatusBadge = ({ status }) => {
    const colors = {
      OPTIMAL: 'bg-green-100 text-green-800',
      REORDER_NOW: 'bg-red-100 text-red-800',
      OVERSTOCK: 'bg-yellow-100 text-yellow-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
        {status.replace('_', ' ')}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Smart Retail Inventory System</h1>
          <p className="text-gray-600">AI-powered demand forecasting and inventory optimization</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['dashboard', 'forecasting', 'optimization', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-wrap gap-4">
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-w-48"
          >
            <optgroup label="Electronics">
              <option value="laptop">Gaming Laptop Pro</option>
              <option value="smartphone">Smart Phone X</option>
            </optgroup>
            <optgroup label="Fashion">
              <option value="jeans">Premium Denim Jeans</option>
              <option value="winterCoat">Winter Parka Coat</option>
              <option value="sneakers">Athletic Sneakers</option>
            </optgroup>
            <optgroup label="Food & Beverage">
              <option value="coffee">Premium Coffee Beans</option>
              <option value="organicMilk">Organic Whole Milk</option>
              <option value="chocolates">Artisan Chocolates</option>
            </optgroup>
            <optgroup label="Home & Kitchen">
              <option value="coffeeMaker">Smart Coffee Maker</option>
              <option value="bedSheets">Luxury Bed Sheet Set</option>
            </optgroup>
            <optgroup label="Home & Garden">
              <option value="gardenTools">Garden Tool Set</option>
            </optgroup>
            <optgroup label="Health & Beauty">
              <option value="shampoo">Organic Shampoo</option>
              <option value="vitamins">Daily Multivitamins</option>
            </optgroup>
            <optgroup label="Sports & Outdoors">
              <option value="yogaMat">Premium Yoga Mat</option>
              <option value="bicycle">Mountain Bike</option>
            </optgroup>
            <optgroup label="Books & Media">
              <option value="cookbook">Gourmet Cookbook</option>
            </optgroup>
            <optgroup label="Toys & Games">
              <option value="boardGame">Strategy Board Game</option>
            </optgroup>
            <optgroup label="Automotive">
              <option value="carTires">All-Season Car Tires</option>
            </optgroup>
            <optgroup label="Pet Supplies">
              <option value="dogFood">Premium Dog Food</option>
            </optgroup>
          </select>
          
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="7">Last 7 days</option>
            <option value="14">Last 14 days</option>
            <option value="30">Last 30 days</option>
            <option value="60">Last 60 days</option>
          </select>
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">${kpis.revenue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Units Sold</p>
                    <p className="text-2xl font-bold text-gray-900">{kpis.unitsSold}</p>
                  </div>
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Forecast Accuracy</p>
                    <p className="text-2xl font-bold text-gray-900">{kpis.forecastAccuracy.toFixed(1)}%</p>
                  </div>
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Turnover Rate</p>
                    <p className="text-2xl font-bold text-gray-900">{optimization.turnoverRate.toFixed(1)}x</p>
                  </div>
                  <Activity className="h-8 w-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Product Status */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Product Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Product</p>
                  <p className="text-lg font-bold text-gray-900">{products[selectedProduct].name}</p>
                  <p className="text-sm text-gray-500">{products[selectedProduct].category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Stock</p>
                  <p className="text-xl font-bold text-gray-900">{products[selectedProduct].currentStock} units</p>
                  <p className="text-sm text-gray-500">Max: {products[selectedProduct].maxStock}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price & Cost</p>
                  <p className="text-lg font-bold text-green-600">${products[selectedProduct].sellingPrice}</p>
                  <p className="text-sm text-gray-500">Cost: ${products[selectedProduct].unitCost}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <StatusBadge status={optimization.status} />
                  <div className="flex gap-2 mt-1">
                    {products[selectedProduct].seasonal && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Seasonal</span>
                    )}
                    {products[selectedProduct].perishable && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Perishable</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sales vs Prediction Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance vs Predictions</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="actualSales" stroke="#3b82f6" name="Actual Sales" />
                  <Line type="monotone" dataKey="predictedSales" stroke="#ef4444" strokeDasharray="5 5" name="Predicted Sales" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'forecasting' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">7-Day Demand Forecast</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={forecast}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="lowerBound" fill="#ddd6fe" name="Lower Bound" />
                  <Area type="monotone" dataKey="upperBound" fill="#c4b5fd" name="Upper Bound" />
                  <Line type="monotone" dataKey="predictedSales" stroke="#7c3aed" strokeWidth={2} name="Predicted Sales" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Forecast Confidence</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={forecast}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="confidence" fill="#10b981" name="Confidence %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'optimization' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recommended Reorder Quantity:</span>
                    <span className="font-semibold">{optimization.recommendedReorder} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Safety Stock:</span>
                    <span className="font-semibold">{optimization.safetyStock} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projected Stockout Days:</span>
                    <span className={`font-semibold ${optimization.projectedStockoutDays > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {optimization.projectedStockoutDays}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Overstock Days:</span>
                    <span className={`font-semibold ${optimization.overstockDays > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
                      {optimization.overstockDays}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lead Time:</span>
                    <span className="font-semibold">{products[selectedProduct].leadTime} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Unit Margin:</span>
                    <span className="font-semibold text-green-600">${(products[selectedProduct].sellingPrice - products[selectedProduct].unitCost).toFixed(2)}</span>
                  </div>
                  {products[selectedProduct].perishable && products[selectedProduct].shelfLife && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shelf Life:</span>
                      <span className="font-semibold">{products[selectedProduct].shelfLife} days</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Levels</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Current Stock</span>
                      <span className="text-sm text-gray-600">{products[selectedProduct].currentStock}/{products[selectedProduct].maxStock}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${(products[selectedProduct].currentStock / products[selectedProduct].maxStock) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Reorder Point</span>
                      <span className="text-sm text-gray-600">{products[selectedProduct].reorderPoint}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{width: `${(products[selectedProduct].reorderPoint / products[selectedProduct].maxStock) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {optimization.status === 'REORDER_NOW' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-red-800">Reorder Alert</h4>
                    <p className="text-red-700">Stock levels are below the reorder point. Consider placing an order for {optimization.recommendedReorder} units.</p>
                  </div>
                </div>
              </div>
            )}

            {optimization.status === 'OVERSTOCK' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center">
                  <Package className="h-6 w-6 text-yellow-600 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-800">Overstock Warning</h4>
                    <p className="text-yellow-700">Current stock levels are high. Consider promotional activities to reduce inventory.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Revenue']} />
                  <Area type="monotone" dataKey="revenue" fill="#3b82f6" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Movement</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="stock" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales vs Stock Correlation</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <ScatterChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stock" name="Stock" />
                    <YAxis dataKey="actualSales" name="Sales" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="actualSales" fill="#8b5cf6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Smart Retail Inventory System - Powered by AI & Machine Learning</p>
        </div>
      </div>
    </div>
  );
};

export default SmartRetailInventorySystem;