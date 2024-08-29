export type TUser = {
  _id: string;
  name: string;
  role: string;
  address: string;
  contact: string;
};

export type TUserData = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
<<<<<<< HEAD
=======

export type TFacility = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
  isDeleted: boolean;
};
>>>>>>> origin/master
