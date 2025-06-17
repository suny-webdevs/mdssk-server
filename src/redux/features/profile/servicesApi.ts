import { baseApi } from "@/redux/api/baseApi"

const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: "/profile/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
    getServices: builder.query({
      query: () => ({
        url: "/profile/services",
        method: "GET",
      }),
      providesTags: ["Service"],
    }),
    updateService: builder.mutation({
      query: (data) => ({
        url: "/profile/services",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
    deleteService: builder.mutation({
      query: (data) => ({
        url: "/profile/services",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Service"],
    }),
  }),
})

export const {
  useCreateServiceMutation,
  useGetServicesQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = servicesApi
