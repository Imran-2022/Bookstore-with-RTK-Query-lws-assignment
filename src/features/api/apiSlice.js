import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"],
        }),
        addBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["books"],
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: (result, error, arg) => [{ type: "book", id: arg }],

        }),
        editBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "books",
                { type: "book", id: arg.id },
            ],
        }),
    }),
   
});

export const { useGetBooksQuery,useAddBookMutation,useDeleteBookMutation,useGetBookQuery,useEditBookMutation } = apiSlice;
