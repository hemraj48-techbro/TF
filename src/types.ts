export type Role = 'customer' | 'provider' | null;

export type CuisineType = 'Maharashtrian' | 'North Indian' | 'South Indian' | 'Gujarati' | 'Jain';
export type DietType = 'Veg' | 'Non-Veg' | 'Jain';
export type NashikArea = 'Gangapur Road' | 'College Road' | 'CIDCO' | 'Indira Nagar' | 'Panchavati' | 'Satpur' | 'Govind Nagar';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  diet: DietType;
  cuisine: CuisineType;
  isPopular?: boolean;
  image?: string;
}

export interface DayMenu {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  lunch: {
    main: string;
    bread: string;
    riceDish: string;
    sides: string[];
    specialTag?: string;
  };
  dinner: {
    main: string;
    bread: string;
    riceDish: string;
    sides: string[];
    specialTag?: string;
  };
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  customerArea: NashikArea;
}

export interface Provider {
  id: string;
  name: string;
  ownerName: string;
  area: NashikArea;
  fullAddress: string;
  rating: number;
  reviewCount: number;
  cuisines: CuisineType[];
  diets: DietType[];
  isFssaiVerified: boolean;
  fssaiLicenseNo: string;
  coverImage: string;
  kitchenPhotos: string[];
  priceRange: string;
  perMealPrice: number;
  weeklyPlanPrice: number;
  monthlyPlanPrice: number;
  deliveryTime: string;
  bio: string;
  specialtyDish: string;
  weeklyMenu: DayMenu[];
  menuItems: MenuItem[];
  reviews: Review[];
  dailyCapacity: number;
  activeOrdersToday: number;
  totalSubscribers: number;
}

export type OrderStatus = 'Confirmed' | 'Preparing' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: string;
  providerId: string;
  providerName: string;
  providerArea: NashikArea;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  mealType: 'Lunch' | 'Dinner' | 'Both';
  orderType: 'Single' | 'Weekly' | 'Monthly' | 'Group';
  itemsSummary: string;
  headcount?: number;
  totalAmount: number;
  status: OrderStatus;
  orderDate: string;
  deliveryTime: string;
  isSubscriber: boolean;
  paymentMethod: 'UPI (GPay)' | 'UPI (PhonePe)' | 'UPI (Paytm)' | 'BHIM UPI';
  paymentId: string;
}

export interface Subscription {
  id: string;
  providerId: string;
  providerName: string;
  providerImage: string;
  planType: 'Weekly' | 'Monthly';
  startDate: string;
  endDate: string;
  mealType: 'Lunch' | 'Dinner' | 'Both';
  diet: DietType;
  pricePerDay: number;
  totalPaid: number;
  status: 'Active' | 'Paused' | 'Cancelled';
  isLunchSkippedToday?: boolean;
  isDinnerSkippedToday?: boolean;
  pauseStartDate?: string;
  pauseEndDate?: string;
  deliveryAddress: string;
}

export interface CustomerUser {
  name: string;
  phone: string;
  area: NashikArea;
  address: string;
  isLoggedIn: boolean;
}
