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
      providesTags: ["facility"],
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
    addNewFacility: builder.mutation({
      query: (data) => {
        console.log({ data });
        return {
          url: "/facility",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["facility"],
    }),
    updateFacility: builder.mutation({
      query: (options) => {
        console.log({ options });
        return {
          url: `/facility/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["facility"],
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
    getAllUserBooking: builder.query({
      query: () => {
        return {
          url: `/bookings/user`,
          method: "GET",
        };
      },
      providesTags: ["userBooking"],
    }),
    getAllBookings: builder.query({
      query: () => {
        return {
          url: `/bookings`,
          method: "GET",
        };
      },
      providesTags: ["userBooking"],
    }),
    cancelBooking: builder.mutation({
      query: (data) => {
        console.log({ data });
        return {
          url: `/bookings/${data}`,
          method: "DELETE",
          // body: data,
        };
      },
      invalidatesTags: ["userBooking"],
    }),
    deleteFacility: builder.mutation({
      query: (data) => {
        console.log({ data });
        return {
          url: `/facility/${data}`,
          method: "DELETE",
          // body: data,
        };
      },
      invalidatesTags: ["facility"],
    }),
  }),
});

export const {
  useGetAllFacilityQuery,
  useGetFacilityDetailsQuery,
  useCheckFacilityAvailabilityQuery,
  useAddBookingsMutation,
  useGetAllUserBookingQuery,
  useCancelBookingMutation,
  useGetAllBookingsQuery,
  useDeleteFacilityMutation,
  useAddNewFacilityMutation,
  useUpdateFacilityMutation,
} = facilityApi;
