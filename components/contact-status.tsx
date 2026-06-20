type ContactStatusProps = {
  status?: string;
};

const messages: Record<string, { tone: "success" | "error" | "warning"; text: string }> = {
  success: {
    tone: "success",
    text: "Your message was sent successfully."
  },
  invalid: {
    tone: "error",
    text: "Please complete all contact form fields before submitting."
  },
  error: {
    tone: "error",
    text: "The message could not be sent. Please try again or email info@iblinkmedia.com."
  },
  unconfigured: {
    tone: "warning",
    text: "The form is available, but email delivery is not configured yet. Add your SMTP settings to enable live sending."
  }
};

export default function ContactStatus({ status }: ContactStatusProps) {
  if (!status || !messages[status]) {
    return null;
  }

  const message = messages[status];

  return (
    <div className={`contact-status-banner ${message.tone}`} role="status" aria-live="polite">
      {message.text}
    </div>
  );
}
