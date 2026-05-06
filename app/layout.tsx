import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceFollow – Automate Professional Invoice Follow-Ups",
  description: "Automatically send polite follow-up emails for overdue invoices. Customizable templates and payment reminders for freelancers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="00fc0c7e-0eb0-47a9-98fd-409b7161048c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
