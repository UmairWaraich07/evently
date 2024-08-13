import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ErrorResponse(status: number, message: string, err?: Error) {
  return Response.json(
    {
      success: false,
      message: err?.message || message,
    },
    {
      status,
    }
  );
}

export function SuccessResponse(status: number, message: string) {
  return Response.json(
    {
      success: true,
      message: message,
    },
    {
      status,
    }
  );
}
