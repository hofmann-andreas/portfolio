export const nameValidation = {
  required: "Name is required",
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters",
  },
  maxLength: {
    value: 50,
    message: "Name cannot exceed 50 characters",
  },
  pattern: {
    value: /^[a-zA-Z\s'-]+$/,
    message: "Name can only contain letters, spaces, hyphens, and apostrophes",
  },
  validate: {
    notOnlySpaces: (value: string) => value.trim().length > 0 || "Name cannot be only spaces",
  },
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
  validate: {
    notOnlySpaces: (value: string) => value.trim().length > 0 || "Email cannot be only spaces",
  },
};

export const messageValidation = {
  required: "Message is required",
  minLength: {
    value: 20,
    message: "Message must be at least 20 characters",
  },
  maxLength: {
    value: 1000,
    message: "Message cannot exceed 1000 characters",
  },
  validate: {
    notOnlySpaces: (value: string) =>
      value.trim().length >= 20 || "Message must contain actual text",
  },
};
