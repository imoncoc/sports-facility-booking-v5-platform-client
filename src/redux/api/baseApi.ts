import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  // baseUrl: "https://sports-facility-booking-platform-backend.vercel.app/api",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.user?.token;
    if (token && token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    console.log({ headers, token });

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["facility", "availability"],
  endpoints: () => ({}),
});
