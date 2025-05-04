"use client";

import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TanstackProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient()); //recommended because we want to have only an instance of the client to benefit from cache

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
