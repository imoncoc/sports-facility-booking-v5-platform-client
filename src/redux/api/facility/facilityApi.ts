import { baseApi } from "../baseApi";

type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

type TResponseRedux<T> = TResponse<T>;

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: ({ page, limit, isDeleted, sortBy, searchTerm }) => {
        const params: Record<string, string> = {
          page: String(page),
          limit: String(limit),
        };

        if (isDeleted !== undefined) {
          params.isDeleted = String(isDeleted);
        }
        if (sortBy) {
          params.sort = sortBy;
        }
        if (searchTerm) {
          params.searchTerm = searchTerm;
        }

        return {
          url: "/facility",
          method: "GET",
          params, // Pass `params` as an object
        };
      },
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response?.data?.result,
          meta: response?.data?.meta,
        };
      },
    }),
    getFacilityDetails: builder.query({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "GET",
        };
      },
    }),
    checkFacilityAvailability: builder.query({
      query: (options) => {
        return {
          url: `/check-availability?date=${options?.date}&facility=${options?.id}`,
          method: "GET",
        };
      },
      providesTags: ["availability"],
    }),
    addBookings: builder.mutation({
      query: (data) => {
        console.log({ data });
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["availability"],
    }),
  }),
});

export const {
  useGetAllFacilityQuery,
  useGetFacilityDetailsQuery,
  useCheckFacilityAvailabilityQuery,
  useAddBookingsMutation,
} = facilityApi;
