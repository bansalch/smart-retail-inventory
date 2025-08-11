export const optimizeInventory = (product, historicalData, forecast) => {
  if (!product || !historicalData || !forecast) return null;

  // Average forecasted demand over the forecast period
  const avgForecastedDemand =
    forecast.reduce((sum, f) => sum + f.forecastedSales, 0) / forecast.length;

  // Safety stock = 50% of average forecast (adjust as needed)
  const safetyStock = Math.ceil(avgForecastedDemand * 0.5);

  // Lead time in days (for example: 5 days)
  const leadTimeDays = product.leadTime || 5;

  // Daily usage rate = average of last 7 days of sales
  const recentSales = historicalData.slice(-7).map((d) => d.sales);
  const avgDailySales =
    recentSales.reduce((a, b) => a + b, 0) / recentSales.length;

  // Estimated demand during lead time
  const demandDuringLeadTime = Math.ceil(avgDailySales * leadTimeDays);

  // Total reorder quantity
  const reorderQuantity = demandDuringLeadTime + safetyStock;

  return {
    product: product.name,
    reorderQuantity,
    safetyStock,
    demandDuringLeadTime,
    avgDailySales: avgDailySales.toFixed(2),
    avgForecastedDemand: avgForecastedDemand.toFixed(2),
  };
};
