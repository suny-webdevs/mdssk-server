import { baseApi } from "@/redux/api/baseApi"

const socialLinksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSocialLink: builder.mutation({
      query: (data) => ({
        url: "/profile/social-links",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SocialLink"],
    }),
    getSocialLinks: builder.query({
      query: () => ({
        url: "/profile/social-links",
        method: "GET",
      }),
      providesTags: ["SocialLink"],
    }),
    updateSocialLink: builder.mutation({
      query: (data) => ({
        url: "/profile/social-links",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["SocialLink"],
    }),
    deleteSocialLink: builder.mutation({
      query: (data) => ({
        url: "/profile/social-links",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["SocialLink"],
    }),
  }),
})

export const {
  useCreateSocialLinkMutation,
  useGetSocialLinksQuery,
  useUpdateSocialLinkMutation,
  useDeleteSocialLinkMutation,
} = socialLinksApi
