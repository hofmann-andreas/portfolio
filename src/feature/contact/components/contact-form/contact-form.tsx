"use client";

import { useState } from "react";

export function ContactForm() {
  // Placeholder handling for form state and submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send data to backend
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-input px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-input px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-border bg-input px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
