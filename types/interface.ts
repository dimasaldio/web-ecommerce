export interface IRoom {
  label: string;
  image: string;
}

export interface IProduct {
  label: string;
  desc: string;
  image: string[];
  realPrice: number;
  discount: number;
  new: boolean;
  rating?: number;
  color?:string[];
  size?:string[];
  room?:string;
}

export interface ICountries {
  name: string;
  towns: ITown[];
}

export interface ITown {
  name: string;
  province: string;
  zipCode: string;
}

export interface IBillingDetails {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  townName: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  typePayment: string;
}