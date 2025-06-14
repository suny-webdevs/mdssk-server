import { baseApi } from "@/redux/api/baseApi"

const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: "/profile/services",
        method: "POST",
        body: data,
      }),
    }),
    getServices: builder.query({
      query: () => ({
        url: "/profile/services",
        method: "GET",
      }),
    }),
  }),
})

export const { useCreateServiceMutation, useGetServicesQuery } = servicesApi
