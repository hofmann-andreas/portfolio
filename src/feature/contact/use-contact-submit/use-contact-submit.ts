"use client";

import { useState } from "react";

import { fetchSubmitContactData } from "../api/fetch-submit-contact-data";
import { ContactFormData } from "../types";

export const useContactSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [hasError, setHasError] = useState(false);

  const submitContactData = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const response = await fetchSubmitContactData({ body: data });

    setIsSuccess(response.isSuccess);
    setIsSubmitting(false);
    setHasError(!response.isSuccess);
  };

  return { submitContactData, isSuccess, isSubmitting, hasError };
};
