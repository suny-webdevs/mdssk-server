import { baseApi } from "@/redux/api/baseApi"

const socialLinksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSocialLink: builder.mutation({
      query: (data) => ({
        url: "/profile/services",
        method: "POST",
        body: data,
      }),
    }),
    getSocialLinks: builder.query({
      query: () => ({
        url: "/profile/services",
        method: "GET",
      }),
    }),
  }),
})

export const { useCreateSocialLinkMutation, useGetSocialLinksQuery } =
  socialLinksApi
