import { baseApi } from "@/redux/api/baseApi"

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (id: string) => {
        return {
          url: `/profile/${id}`,
          method: "GET",
        }
      },
      providesTags: ["Profile", "Education"],
    }),
    updateProfile: builder.mutation({
      query: ({ userId, ...data }) => ({
        url: `/profile/${userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi
