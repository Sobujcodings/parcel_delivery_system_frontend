// ekhane api r shob kaj korte hobe.
// api/v1/auth/login
// api/v1/auth/register

import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllparcels: builder.query({
      query: () => ({
        url: "/parcels/view-all-parcels",
        method: "GET",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/parcels/view-all-users",
        method: "GET",
      }),
    }),
    getIncomingParcels: builder.query({
      query: () => ({
        url: "/parcels/incoming-parcels",
        method: "GET",
      }),
    }),
    CreateParcel: builder.mutation({
      query: (createParcelInfo) => ({
        url: "/parcels",
        method: "POST",
        body: createParcelInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllparcelsQuery,
  useGetUsersQuery,
  useGetIncomingParcelsQuery,
  useCreateParcelMutation
} = authApi;
