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

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/facility",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const { useGetAllFacilityQuery } = authApi;
