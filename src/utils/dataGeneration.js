import { products } from '../data/products';

// Utility to get a date string for n days ago
const getDateNDaysAgo = (n) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  return date.toISOString().split('T')[0];
};

// Generate synthetic historical sales data for a product
export const generateHistoricalData = (productKey, days = 30) => {
  const product = products.find((p) => p.key === productKey);
  if (!product) return [];

  const data = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = getDateNDaysAgo(i);
    const base = Math.floor(Math.random() * 10 + 10); // base sales
    const variance = Math.floor(Math.random() * 6); // +/- variation
    const sales = base + (Math.random() > 0.5 ? variance : -variance);

    data.push({
      date,
      product: product.name,
      sales: Math.max(0, sales),
    });
  }

  return data;
};

// Simple forecast: average of last 7 days
export const forecastDemand = (historicalData, forecastDays = 7) => {
  if (historicalData.length < 7) return [];

  const recentSales = historicalData
    .slice(-7)
    .map((entry) => entry.sales);
  const average = recentSales.reduce((a, b) => a + b, 0) / recentSales.length;

  const forecast = [];
  const today = new Date(historicalData[historicalData.length - 1].date);

  for (let i = 1; i <= forecastDays; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);
    forecast.push({
      date: futureDate.toISOString().split('T')[0],
      forecastedSales: Math.round(average + Math.random() * 2 - 1), // slight noise
    });
  }

  return forecast;
};
