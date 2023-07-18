import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  // eslint-disable-next-line no-undef
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:6061" }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/admin/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = api;
