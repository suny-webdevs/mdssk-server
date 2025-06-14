import { baseApi } from "@/redux/api/baseApi"

const educationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEducation: builder.mutation({
      query: (data) => ({
        url: "/profile/education",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Education"],
    }),
    getEducations: builder.query({
      query: () => ({
        url: "/profile/education",
        method: "GET",
      }),
      providesTags: ["Education"],
    }),
  }),
})

export const { useCreateEducationMutation, useGetEducationsQuery } =
  educationApi
