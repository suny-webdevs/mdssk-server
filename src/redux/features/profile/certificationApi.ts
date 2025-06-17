import { baseApi } from "@/redux/api/baseApi"

const certificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCertification: builder.mutation({
      query: (data) => ({
        url: "/profile/certification",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Certification"],
    }),
    getCertifications: builder.query({
      query: () => ({
        url: "/profile/certification",
        method: "GET",
      }),
      providesTags: ["Certification"],
    }),
    updateCertification: builder.mutation({
      query: (data) => ({
        url: "/profile/certification",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Certification"],
    }),
    deleteCertification: builder.mutation({
      query: (data) => ({
        url: "/profile/certification",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Certification"],
    }),
  }),
})

export const {
  useCreateCertificationMutation,
  useGetCertificationsQuery,
  useUpdateCertificationMutation,
  useDeleteCertificationMutation,
} = certificationApi
