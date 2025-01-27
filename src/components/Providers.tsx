"use client";

import QueryProvider from "@/components/QueryProvider";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import NotistackProvider from "./NotistackProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotistackProvider>
      <QueryProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </QueryProvider>
    </NotistackProvider>
  );
}
