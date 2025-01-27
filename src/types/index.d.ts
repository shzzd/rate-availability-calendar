import "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: IFetchError;
  }
}

export interface IFetchError extends Error {
  statusCode: number;
  status: string;
  code: string;
  message: string;
  reason?: string;
  error?: IFetchError["code"] extends "FST_ERR_VALIDATION"
    ? {
        key: string | unknown;
        message: string;
      }[]
    : unknown;
}
