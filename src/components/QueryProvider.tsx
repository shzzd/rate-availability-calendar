"use client";

import { PropsWithChildren, useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { enqueueSnackbar } from "notistack";

function QueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: (error, query) => {
          // only show error toasts if we already have data in the cache
          // which indicates a failed background update
          if (query.state.data !== undefined) {
            enqueueSnackbar("Failed to fetch data!", {
              variant: "error",
            });
          }
        },
      }),
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
