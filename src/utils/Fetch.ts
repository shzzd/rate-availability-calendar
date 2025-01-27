import { enqueueSnackbar } from "notistack";
import { IFetchError } from "@/types";

interface Props {
  method: string;
  url: URL | RequestInfo;
  body?: Record<string, unknown>;
}

export interface IResult<T> {
  data: T;
  message: string;
  status: string;
}

const Fetch = async <TResponseData>({
  method,
  url,
  body,
}: Props): Promise<IResult<TResponseData>> => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})); // Gracefully handle non-JSON errors

      if (process.env.NODE_ENV === "development") {
        console.error("Fetch Error Response:", errorData);
      }

      throw { ...errorData, statusCode: response.status };
    }

    const data = await response.json();

    if (process.env.NODE_ENV === "development") {
      console.log("Response Data Only Dev:", data);
    }

    return data as IResult<TResponseData>;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Fetch Error Only Dev", error);
    }

    if (!window.navigator.onLine) {
      enqueueSnackbar("You're currently offline.", { variant: "error" });
    } else {
      switch ((error as IFetchError).statusCode) {
        case 400:
          throw error;
        case 404:
          enqueueSnackbar((error as IFetchError).reason, {
            variant: "error",
          });
          break;
        case 500:
          enqueueSnackbar((error as IFetchError).message, {
            variant: "error",
          });
          throw error;
        default:
          enqueueSnackbar((error as IFetchError).message, {
            variant: "error",
          });
          throw error;
      }
    }

    throw error; // Always throw the error for consistent behavior
  }
};

export default Fetch;
