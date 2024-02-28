enum EGender {
  Male = 'male',
  Female = 'female',
}

interface ICoordinates {
  lat: number;
  lng: number;
}

interface IAddressInfo {
  address: string;
  city: string;
  coordinates: ICoordinates;
  postalCode: string;
  state: string;
}

interface ICompany {
  address: IAddressInfo;
  department: string;
  name: string;
  title: string;
}

interface IBankInfo {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface IHair {
  color: string;
  type: string;
}

export interface IUser {
  address: IAddressInfo;
  age: number;
  bank: IBankInfo;
  birthDate: string;
  bloodGroup: string;
  company: ICompany;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: EGender;
  hair: IHair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}

export interface IUsersResponse {
  users: IUser[];
  total: number;
  limit: number;
  skip: number;
}
