"use client";

import { useEffect, useRef, useState } from "react";

import { fetchSubmitContactData } from "../api/fetch-submit-contact-data";
import { ContactFormData } from "../types";

const COOLDOWN_MS = 60_000;
const LS_KEY = "contact_last_submit";

function getRemainingSeconds() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) return 0;
  const remaining = Math.ceil((Number(raw) + COOLDOWN_MS - Date.now()) / 1000);
  return remaining > 0 ? remaining : 0;
}

export const useContactSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(() =>
    typeof window !== "undefined" ? getRemainingSeconds() : 0
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (cooldownRemaining <= 0) return;

    intervalRef.current = setInterval(() => {
      const remaining = getRemainingSeconds();
      setCooldownRemaining(remaining);
      if (remaining <= 0) clearInterval(intervalRef.current!);
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [cooldownRemaining > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  const submitContactData = async (data: ContactFormData) => {
    if (cooldownRemaining > 0) return;

    setIsSubmitting(true);
    const response = await fetchSubmitContactData({ body: data });
    setIsSuccess(response.isSuccess);
    setIsSubmitting(false);
    setHasError(!response.isSuccess);

    localStorage.setItem(LS_KEY, String(Date.now()));
    setCooldownRemaining(COOLDOWN_MS / 1000);
  };

  return { submitContactData, isSuccess, isSubmitting, hasError, cooldownRemaining };
};
