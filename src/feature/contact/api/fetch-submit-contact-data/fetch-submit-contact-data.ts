import { ContactFormData } from "../../types";

interface SubmitContactDataResponse {
  isSuccess: boolean;
  error?: unknown;
}

interface SubmitContactDataParams {
  body: ContactFormData;
}

export const fetchSubmitContactData = async (
  params: SubmitContactDataParams
): Promise<SubmitContactDataResponse> => {
  const { body } = params;

  try {
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      throw new Error("Web3Forms access key is not defined");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, ...body }),
    });

    return { isSuccess: response.ok, error: null };
  } catch (error) {
    return {
      isSuccess: false,
      error,
    } as SubmitContactDataResponse;
  }
};
