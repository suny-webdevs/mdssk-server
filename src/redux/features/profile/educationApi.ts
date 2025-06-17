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
    updateEducation: builder.mutation({
      query: (data) => ({
        url: "/profile/education",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Education"],
    }),
    deleteEducation: builder.mutation({
      query: (data) => ({
        url: "/profile/education",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Education"],
    }),
  }),
})

export const {
  useCreateEducationMutation,
  useGetEducationsQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApi
