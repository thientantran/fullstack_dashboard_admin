import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  // eslint-disable-next-line no-undef
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:6061" }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/admin/${id}`,
      providesTags: ["User", "Products"],
    }),
    getProducts: build.query({
      query: () => `client/products`,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery } = api;
