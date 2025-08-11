export const products = {
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