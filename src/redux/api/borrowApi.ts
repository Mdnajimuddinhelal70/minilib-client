import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBorrowSummary } from "../../types/borrowSummary";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}/api` }),
  tagTypes: ["Borrow", "Books"],
  endpoints: (builder) => ({
    borrowBook: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Borrow", "Books"],
    }),
    getBorrowSummary: builder.query<IBorrowSummary[], void>({
      query: () => "/borrow/summary",
      providesTags: ["Borrow"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
