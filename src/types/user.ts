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
