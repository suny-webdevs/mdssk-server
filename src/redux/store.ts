// lib/store.ts
import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // integrates the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
