import type { Provider, DayMenu, Order, Subscription, NashikArea } from './types';

export const NASHIK_AREAS: NashikArea[] = [
  'Gangapur Road',
  'College Road',
  'CIDCO',
  'Indira Nagar',
  'Panchavati',
  'Satpur',
  'Govind Nagar'
];

const sampleWeeklyMenu: DayMenu[] = [
  {
    day: 'Monday',
    lunch: {
      main: 'Pithla & Jowar Bhakri',
      bread: '2 Fresh Jowar Bhakri',
      riceDish: 'Steam Rice & Spiced Varan',
      sides: ['Thecha (Green Chili Paste)', 'Kachumber Salad', 'Taak (Buttermilk)'],
      specialTag: 'Maharashtrian Special'
    },
    dinner: {
      main: 'Sev Bhaji (Spicy Khandeshi Curry)',
      bread: '3 Wheat Chapatis',
      riceDish: 'Jeera Rice & Dal Fry',
      sides: ['Kanda Limbu', 'Roasted Papad']
    }
  },
  {
    day: 'Tuesday',
    lunch: {
      main: 'Paneer Butter Masala',
      bread: '3 Phulkas with Pure Ghee',
      riceDish: 'Veg Pulav & Boondi Raita',
      sides: ['Gulab Jamun (1 pc)', 'Green Salad'],
      specialTag: 'Festive Delight'
    },
    dinner: {
      main: 'Baingan Bharta (Khandeshi Style)',
      bread: '2 Bajra Bhakri with White Butter',
      riceDish: 'Plain Rice & Sol Kadhi',
      sides: ['Fried Chiles', 'Spiced Curd']
    }
  },
  {
    day: 'Wednesday',
    lunch: {
      main: 'Matki Usal & Poori',
      bread: '4 Hot Wheat Pooris',
      riceDish: 'Masala Bhaat (Nashik Style)',
      sides: ['Koshimbir', 'Sweet Sheera'],
      specialTag: 'Traditional Flavor'
    },
    dinner: {
      main: 'Alu Veg Curry & Moong Dal',
      bread: '3 Wheat Chapatis',
      riceDish: 'Steamed Basmati Rice',
      sides: ['Pickle', 'Papad']
    }
  },
  {
    day: 'Thursday',
    lunch: {
      main: 'Kaju Curry & Dum Aloo',
      bread: '3 Butter Chapatis',
      riceDish: 'Veg Biryani & Mix Veg Raita',
      sides: ['Fruit Salad', 'Papad Roll'],
      specialTag: 'Thursday Feast'
    },
    dinner: {
      main: 'Chana Masala (Amritsari Style)',
      bread: '3 Wheat Chapatis',
      riceDish: 'Jeera Rice & Masala Dal',
      sides: ['Sliced Onion with Lemon', 'Mint Chutney']
    }
  },
  {
    day: 'Friday',
    lunch: {
      main: 'Kala Masala Chicken / Paneer Spicely',
      bread: '3 Chapatis / 2 Jowar Bhakri',
      riceDish: 'Indrayani Rice & Tambda Rassa',
      sides: ['Kanda Slices', 'Sol Kadhi Glass'],
      specialTag: 'Khandeshi Kala Masala'
    },
    dinner: {
      main: 'Veg Kolhapuri',
      bread: '3 Wheat Chapatis',
      riceDish: 'Dal Tadka & Steamed Rice',
      sides: ['Curd Dip', 'Fried Papad']
    }
  },
  {
    day: 'Saturday',
    lunch: {
      main: 'Misal Gravy & Pav / Chapati',
      bread: '4 Fresh Pav or 3 Chapatis',
      riceDish: 'Curd Rice with Tadka',
      sides: ['Farsan Bowl', 'Chopped Onions & Lemon'],
      specialTag: 'Nashik Misal Weekend'
    },
    dinner: {
      main: 'Soyabean Curry (Nashik Special)',
      bread: '3 Wheat Chapatis',
      riceDish: 'Basmati Steamed Rice & Moong Varan',
      sides: ['Salad', 'Mango Pickle']
    }
  },
  {
    day: 'Sunday',
    lunch: {
      main: 'Special Sunday Puran Poli Thali',
      bread: '2 Ghee Puran Polis',
      riceDish: 'Katachi Amti & Steamed Indrayani Rice',
      sides: ['Batata Sukhi Bhaji', 'Kurdai & Papad', 'Badam Kheer'],
      specialTag: 'Sunday Special Feast'
    },
    dinner: {
      main: 'Dal Khichdi Tadka with Pure Ghee',
      bread: '2 Roasted Phulkas',
      riceDish: 'Special Ghee Khichdi',
      sides: ['Roasted Papad', 'Garlic Chutney', 'Sweet Curd']
    }
  }
];

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: 'prov-1',
    name: "Aai's Kitchen & Tiffin Services",
    ownerName: 'Mrs. Sunita Deshmukh',
    area: 'Gangapur Road',
    fullAddress: 'Plot 42, Near KTHM College, Gangapur Road, Nashik',
    rating: 4.9,
    reviewCount: 142,
    cuisines: ['Maharashtrian'],
    diets: ['Veg', 'Non-Veg'],
    isFssaiVerified: true,
    fssaiLicenseNo: '21523048000192',
    coverImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    kitchenPhotos: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
    ],
    priceRange: '₹90 - ₹120',
    perMealPrice: 100,
    weeklyPlanPrice: 650,
    monthlyPlanPrice: 2400,
    deliveryTime: '25-35 min',
    bio: 'Homestyle cooking prepared with traditional Khandeshi spices & handmade Indrayani rice. Hygiene and pure ghee guaranteed by Sunita Aai.',
    specialtyDish: 'Pithla Bhakri & Sol Kadhi Thali',
    weeklyMenu: sampleWeeklyMenu,
    menuItems: [
      { id: 'm1', name: 'Standard Maharashtrian Veg Thali', description: '2 Bhakri/3 Chapati, 1 Main Curry, Varan Bhaat, Sol Kadhi & Pickle', price: 100, diet: 'Veg', cuisine: 'Maharashtrian', isPopular: true },
      { id: 'm2', name: 'Kala Masala Special Thali', description: 'Fresh spicy Kala Masala curry, 3 Chapatis, Rice & Cucumber Raita', price: 120, diet: 'Veg', cuisine: 'Maharashtrian', isPopular: true },
      { id: 'm3', name: 'Sunday Puran Poli Special Meal', description: '2 Puran Polis with Katachi Amti, Rice, Batata Bhaji & Kurdai', price: 140, diet: 'Veg', cuisine: 'Maharashtrian' }
    ],
    reviews: [
      { id: 'r1', customerName: 'Rohan Patil', rating: 5, comment: 'Authentic Aai ke haath ka khana! The Pithla Bhakri reminds me of home.', date: 'Yesterday', customerArea: 'Gangapur Road' },
      { id: 'r2', customerName: 'Priya Joshi', rating: 5, comment: 'Very clean packing and hot food delivered every lunch on time.', date: '3 days ago', customerArea: 'College Road' }
    ],
    dailyCapacity: 60,
    activeOrdersToday: 42,
    totalSubscribers: 38
  },
  {
    id: 'prov-2',
    name: 'Panchavati Swad Home Dining',
    ownerName: 'Shri Mangesh Khairnar',
    area: 'Panchavati',
    fullAddress: 'Behind Ramkund, Near Malviya Chowk, Panchavati, Nashik',
    rating: 4.8,
    reviewCount: 98,
    cuisines: ['Maharashtrian', 'Jain'],
    diets: ['Veg', 'Jain'],
    isFssaiVerified: true,
    fssaiLicenseNo: '21522048000341',
    coverImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    kitchenPhotos: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80'
    ],
    priceRange: '₹80 - ₹110',
    perMealPrice: 90,
    weeklyPlanPrice: 580,
    monthlyPlanPrice: 2200,
    deliveryTime: '20-30 min',
    bio: 'Pure Satvik & Jain options near Godavari ghat. Zero garlic/onion option available upon request. Made with fresh farm veggies.',
    specialtyDish: 'Satvik Dal Khichdi & Gujarti Kadhi',
    weeklyMenu: sampleWeeklyMenu,
    menuItems: [
      { id: 'm4', name: 'Pure Satvik Veg Thali', description: '3 Phulkas, No Onion No Garlic Curry, Dal Fry & Steamed Rice', price: 90, diet: 'Jain', cuisine: 'Jain', isPopular: true },
      { id: 'm5', name: 'Jain Khichdi Kadhi Special', description: 'Ghee Moong Khichdi with Sweet Curd Kadhi & Papad', price: 85, diet: 'Jain', cuisine: 'Jain' }
    ],
    reviews: [
      { id: 'r3', customerName: 'Amit Shah', rating: 5, comment: 'Perfect Jain tiffin service in Panchavati! Tastes so pure.', date: '2 days ago', customerArea: 'Panchavati' }
    ],
    dailyCapacity: 45,
    activeOrdersToday: 32,
    totalSubscribers: 26
  },
  {
    id: 'prov-3',
    name: 'Deshmukh Family Kitchen',
    ownerName: 'Shalini Deshmukh',
    area: 'College Road',
    fullAddress: 'Model Colony, Near BYK College, College Road, Nashik',
    rating: 4.7,
    reviewCount: 115,
    cuisines: ['North Indian', 'Maharashtrian'],
    diets: ['Veg'],
    isFssaiVerified: true,
    fssaiLicenseNo: '21523048000889',
    coverImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    kitchenPhotos: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
    ],
    priceRange: '₹95 - ₹130',
    perMealPrice: 110,
    weeklyPlanPrice: 700,
    monthlyPlanPrice: 2600,
    deliveryTime: '15-25 min',
    bio: 'Favorite among BYK & KTHM college students and young working professionals. Balanced nutrition and zero excess oil.',
    specialtyDish: 'Paneer Butter Masala & Soft Paratha',
    weeklyMenu: sampleWeeklyMenu,
    menuItems: [
      { id: 'm6', name: 'Executive North Indian Thali', description: 'Paneer Curry, Seasonal Sabzi, 3 Butter Chapatis, Jeera Rice & Sweet', price: 110, diet: 'Veg', cuisine: 'North Indian', isPopular: true }
    ],
    reviews: [
      { id: 'r4', customerName: 'Neha Kulkarni', rating: 4, comment: 'Soft chapatis even after 2 hours! Highly recommended for working folks.', date: '4 days ago', customerArea: 'College Road' }
    ],
    dailyCapacity: 80,
    activeOrdersToday: 65,
    totalSubscribers: 54
  },
  {
    id: 'prov-4',
    name: 'Annapurna Tiffin House CIDCO',
    ownerName: 'Sujata More',
    area: 'CIDCO',
    fullAddress: 'Pavan Nagar, Near Stadium, CIDCO Uttam Nagar, Nashik',
    rating: 4.8,
    reviewCount: 86,
    cuisines: ['Maharashtrian', 'Gujarati'],
    diets: ['Veg'],
    isFssaiVerified: true,
    fssaiLicenseNo: '21521048000512',
    coverImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    kitchenPhotos: [],
    priceRange: '₹75 - ₹100',
    perMealPrice: 85,
    weeklyPlanPrice: 550,
    monthlyPlanPrice: 2000,
    deliveryTime: '30-40 min',
    bio: 'Affordable, hearty daily tiffins made with love in CIDCO. Generous rice portion & fresh seasonal bhaji every afternoon.',
    specialtyDish: 'Khandeshi Shev Bhaji & Chapati',
    weeklyMenu: sampleWeeklyMenu,
    menuItems: [
      { id: 'm7', name: 'Budget Daily Lunch Tiffin', description: '2 Veggies, 4 Chapatis, Rice, Dal & Fried Chilies', price: 85, diet: 'Veg', cuisine: 'Maharashtrian', isPopular: true }
    ],
    reviews: [
      { id: 'r5', customerName: 'Vikas Sonawane', rating: 5, comment: 'Most reasonable pricing in CIDCO without compromising on taste.', date: '1 week ago', customerArea: 'CIDCO' }
    ],
    dailyCapacity: 50,
    activeOrdersToday: 38,
    totalSubscribers: 30
  },
  {
    id: 'prov-5',
    name: 'Shree Mauli Kathiyawadi & Gujarati Tiffins',
    ownerName: 'Bhavna Patel',
    area: 'Indira Nagar',
    fullAddress: 'Near Water Tank, Govind Nagar Extension, Indira Nagar, Nashik',
    rating: 4.9,
    reviewCount: 74,
    cuisines: ['Gujarati', 'Jain'],
    diets: ['Veg', 'Jain'],
    isFssaiVerified: true,
    fssaiLicenseNo: '21524048000109',
    coverImage: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    kitchenPhotos: [],
    priceRange: '₹100 - ₹130',
    perMealPrice: 105,
    weeklyPlanPrice: 680,
    monthlyPlanPrice: 2500,
    deliveryTime: '25-35 min',
    bio: 'Authentic Kathiyawadi Sev Tomato, Ringan Bharta & Gujarati sweet Kadhi made with pure spices from Rajkot.',
    specialtyDish: 'Kathiyawadi Undhiyu & Rotla',
    weeklyMenu: sampleWeeklyMenu,
    menuItems: [
      { id: 'm8', name: 'Gujarati Special Thali', description: 'Sev Tomato Curry, Gujarati Kadhi, 4 Thin Rotlis, Vagharelo Bhaat & Sweet', price: 105, diet: 'Veg', cuisine: 'Gujarati', isPopular: true }
    ],
    reviews: [
      { id: 'r6', customerName: 'Sanjay Mehta', rating: 5, comment: 'Authentic Gujarati taste in Nashik! Kadhi is spot on.', date: '3 days ago', customerArea: 'Indira Nagar' }
    ],
    dailyCapacity: 40,
    activeOrdersToday: 28,
    totalSubscribers: 22
  },
  {
    id: 'prov-6',
    name: 'Sai Krupa South & North Tiffins',
    ownerName: 'K. Srikant Iyer',
    area: 'Satpur',
    fullAddress: 'MIDC Satpur Colony, Near ABB Circle, Nashik',
    rating: 4.6,
    reviewCount: 52,
    cuisines: ['South Indian', 'North Indian'],
    diets: ['Veg'],
    isFssaiVerified: false,
    fssaiLicenseNo: 'Pending Verification',
    coverImage: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    kitchenPhotos: [],
    priceRange: '₹85 - ₹115',
    perMealPrice: 95,
    weeklyPlanPrice: 600,
    monthlyPlanPrice: 2300,
    deliveryTime: '30-45 min',
    bio: 'Serving MIDC Satpur industrial executives with authentic Sambhar Rice, Poriyal, Curd Rice & North Indian combo thalis.',
    specialtyDish: 'Special Sambhar Rice & Potato Poriyal',
    weeklyMenu: sampleWeeklyMenu,
    menuItems: [
      { id: 'm9', name: 'South Indian Meal Box', description: 'Sambhar Rice, Rasam, 2 Chapatis, Poriyal & Homemade Curd', price: 95, diet: 'Veg', cuisine: 'South Indian', isPopular: true }
    ],
    reviews: [
      { id: 'r7', customerName: 'Ganesh Pillai', rating: 4.5, comment: 'Great rasam and sambhar for South Indians working in Satpur MIDC.', date: '5 days ago', customerArea: 'Satpur' }
    ],
    dailyCapacity: 50,
    activeOrdersToday: 24,
    totalSubscribers: 18
  }
];

export const INITIAL_CUSTOMER_ORDERS: Order[] = [
  {
    id: 'ORD-9021',
    providerId: 'prov-1',
    providerName: "Aai's Kitchen & Tiffin Services",
    providerArea: 'Gangapur Road',
    customerName: 'Hemraj Patil',
    customerPhone: '+91 98234 56789',
    customerAddress: 'Flat 402, Sai Silver Heights, Near KTHM College, Gangapur Road, Nashik',
    mealType: 'Lunch',
    orderType: 'Weekly',
    itemsSummary: 'Pithla & Jowar Bhakri + Spiced Varan Bhaat & Taak',
    totalAmount: 650,
    status: 'Preparing',
    orderDate: 'Today, 28 July',
    deliveryTime: '1:15 PM - 1:45 PM',
    isSubscriber: true,
    paymentMethod: 'UPI (GPay)',
    paymentId: 'UPI908234129'
  }
];

export const INITIAL_CUSTOMER_SUBSCRIPTION: Subscription = {
  id: 'SUB-401',
  providerId: 'prov-1',
  providerName: "Aai's Kitchen & Tiffin Services",
  providerImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  planType: 'Monthly',
  startDate: '2026-07-15',
  endDate: '2026-08-15',
  mealType: 'Both',
  diet: 'Veg',
  pricePerDay: 90,
  totalPaid: 2400,
  status: 'Active',
  isLunchSkippedToday: false,
  isDinnerSkippedToday: false,
  deliveryAddress: 'Flat 402, Sai Silver Heights, Gangapur Road, Nashik'
};

export const INITIAL_PROVIDER_ORDERS = [
  { id: 'PO-101', customerName: 'Rohan Wagh', area: 'Gangapur Road', type: 'Subscribers', meal: 'Lunch - Maharashtrian Thali', phone: '9890123456', prepared: true, outForDelivery: true, delivered: false },
  { id: 'PO-102', customerName: 'Pooja Kale', area: 'College Road', type: 'Subscribers', meal: 'Lunch - Special Bhakri Thali', phone: '9822334455', prepared: true, outForDelivery: false, delivered: false },
  { id: 'PO-103', customerName: 'Dr. Sameer Borse', area: 'Gangapur Road', type: 'Subscribers', meal: 'Lunch - Low Salt Veg Meal', phone: '9423112233', prepared: false, outForDelivery: false, delivered: false },
  { id: 'PO-104', customerName: 'Aniket Shinde (Office Group)', area: 'Indira Nagar', type: 'One-time orders', meal: 'Lunch (6 Headcount Group Order)', phone: '9765432100', prepared: true, outForDelivery: false, delivered: false },
  { id: 'PO-105', customerName: 'Mahesh Gaikwad', area: 'Govind Nagar', type: 'One-time orders', meal: 'Lunch - Single Kala Masala Thali', phone: '9922001122', prepared: false, outForDelivery: false, delivered: false }
];
