import { useReducer } from "react";
import { z } from "zod";
import { ContactFormData, contactFormSchema } from "@/lib/schemas/contact-form";

interface ContactFormState {
  values: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>>;
  status: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
}

type ContactFormAction =
  | { type: "SET_FIELD"; field: keyof ContactFormData; value: string }
  | { type: "SET_ERRORS"; errors: Partial<Record<keyof ContactFormData, string>> }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; message: string }
  | { type: "RESET" };

const initialState: ContactFormState = {
  values: {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  },
  errors: {},
  status: "idle",
};

function contactFormReducer(
  state: ContactFormState,
  action: ContactFormAction
): ContactFormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        // Clear error for the field being edited
        errors: { ...state.errors, [action.field]: undefined },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
        status: "idle",
      };
    case "SUBMIT_START":
      return {
        ...state,
        status: "submitting",
        errorMessage: undefined,
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        status: "success",
        values: initialState.values, // Reset form on success
      };
    case "SUBMIT_ERROR":
      return {
        ...state,
        status: "error",
        errorMessage: action.message,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useContactForm() {
  const [state, dispatch] = useReducer(contactFormReducer, initialState);

  const setField = (field: keyof ContactFormData, value: string) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const validate = (): boolean => {
    const result = contactFormSchema.safeParse(state.values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      dispatch({ type: "SET_ERRORS", errors: fieldErrors });
      return false;
    }
    return true;
  };

  const submit = async (locale?: string) => {
    if (!validate()) return;

    dispatch({ type: "SUBMIT_START" });

    try {
      const payload = { ...state.values, locale };
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
      const response = await fetch(`${apiUrl}/api/email/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      dispatch({ type: "SUBMIT_SUCCESS" });
    } catch (error) {
      console.error("Submission error:", error);
      dispatch({
        type: "SUBMIT_ERROR",
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    values: state.values,
    errors: state.errors,
    status: state.status,
    errorMessage: state.errorMessage,
    setField,
    submit,
    reset,
  };
}

