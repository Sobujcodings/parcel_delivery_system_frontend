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
      providesTags: ["ParcelStatus"]
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/parcels/view-all-users",
        method: "GET",
      }),
      providesTags: ["UserIsActiveStatus"],
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
    updateParcelStatus: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcels/update-parcel-status",
        method: "POST",
        body: parcelInfo,
      }),
      invalidatesTags: ["ParcelStatus"],
    }),
    BlockUser: builder.mutation({
      query: (userInfo) => ({
        url: "/parcels/update-user-active-status",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["UserIsActiveStatus"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllparcelsQuery,
  useGetUsersQuery,
  useGetIncomingParcelsQuery,
  useCreateParcelMutation,
  useBlockUserMutation,
  useUpdateParcelStatusMutation,
} = authApi;
