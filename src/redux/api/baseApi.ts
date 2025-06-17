// lib/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}`,
    credentials: "include",
  }),
  tagTypes: ["Profile", "Education", "Service", "Certification", "SocialLink"],
  endpoints: () => ({}),
})
