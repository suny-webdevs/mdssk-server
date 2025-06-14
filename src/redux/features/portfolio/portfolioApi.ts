import { baseApi } from "@/redux/api/baseApi"

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolios: builder.query({
      query: () => {
        return {
          url: "/portfolios",
          method: "GET",
        }
      },
    }),
  }),
})

export const { useGetPortfoliosQuery } = portfolioApi
