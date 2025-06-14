import { baseApi } from "@/redux/api/baseApi"

const certificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCertification: builder.mutation({
      query: (data) => ({
        url: "/profile/certification",
        method: "POST",
        body: data,
      }),
    }),
    getCertifications: builder.query({
      query: () => ({
        url: "/profile/certification",
        method: "GET",
      }),
    }),
  }),
})

export const { useCreateCertificationMutation, useGetCertificationsQuery } =
  certificationApi
