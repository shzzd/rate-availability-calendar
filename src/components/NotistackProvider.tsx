"use client";

import { IconButton } from "@mui/material";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { PropsWithChildren } from "react";
import { Close as CloseIcon } from "@mui/icons-material";

function NotistackProvider({ children }: PropsWithChildren) {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      action={(key) => (
        <IconButton onClick={() => closeSnackbar(key)}>
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}

export default NotistackProvider;
