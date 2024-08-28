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

type TQueryParam = {
  name: string;
  value: boolean | React.Key;
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
        console.log({ searchTerm });
        const params = new URLSearchParams();
        params.append("page", String(page));
        params.append("limit", String(limit));
        if (isDeleted !== undefined) {
          params.append("isDeleted", String(isDeleted));
        }
        if (sortBy) {
          params.append("sort", String(sortBy));
        }
        if (searchTerm) {
          params.append("searchTerm", String(searchTerm));
        }

        console.log({ searchTerm });
        return {
          url: "/facility",
          method: "GET",
          params: params.toString(), // Pass query parameters as a string
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
        // const params = new URLSearchParams();
        // if (priority) {
        //   params.append("priority", priority);
        // }
        return {
          url: `/facility/${id}`,
          method: "GET",
          //   params: params,
        };
      },
    }),
  }),
});

export const { useGetAllFacilityQuery, useGetFacilityDetailsQuery } =
  facilityApi;
