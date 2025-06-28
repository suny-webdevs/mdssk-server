"use server"

export const createBlog = async () => {}

export const getBlogs = async () => {}

export const getBlog = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/blogs/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        next: {
          revalidate: 30,
        },
      }
    )
    const data = await res.json()
    if (data?.success) {
      return data?.data
    }
    return null
  } catch (error) {
    console.log(error)
  }
}

export const updateBlog = async () => {}

export const deleteBlog = async () => {}
