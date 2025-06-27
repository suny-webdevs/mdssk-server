import { baseApi } from "@/redux/api/baseApi"

const portfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => ({
        url: "/portfolios",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Projects"],
    }),
    getProjects: builder.query({
      query: () => {
        return {
          url: "/portfolios",
          method: "GET",
        }
      },
      providesTags: ["Projects"],
    }),
    getProject: builder.query({
      query: (id: string) => ({
        url: `/portfolios/${id}`,
        method: "GET",
      }),
      providesTags: ["Projects"],
    }),
    updateProject: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `/portfolios/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Projects"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/portfolios/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
})

export const {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useGetProjectQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = portfolioApi
