export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Freelancers &amp; Consultants
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Stop Chasing Payments.<br />
          <span className="text-[#58a6ff]">Automate Your Invoice Follow-Ups.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Send polite, professional follow-up emails for overdue invoices automatically. Customizable templates, smart scheduling, and payment reminders — so you get paid faster without the awkward nudges.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start for $9/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { title: "Smart Scheduling", desc: "Reminders sent at the right time — 3, 7, and 14 days overdue." },
          { title: "Custom Templates", desc: "Personalize tone and content for each client or invoice type." },
          { title: "Instant Delivery", desc: "Powered by Resend for reliable, high-deliverability email sending." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoices tracked",
              "Automated follow-up sequences",
              "Customizable email templates",
              "Client payment history",
              "Email delivery via Resend",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the automated follow-up work?",
              a: "Once you add an invoice, InvoiceFollow monitors its due date and automatically sends follow-up emails at configurable intervals — for example, 3, 7, and 14 days after the due date — until the invoice is marked paid."
            },
            {
              q: "Can I customize the email templates?",
              a: "Yes. You can edit the subject line, body, and tone for each follow-up stage. Use variables like client name, invoice amount, and due date to personalize every message."
            },
            {
              q: "What happens if I cancel my subscription?",
              a: "You can cancel anytime from your account settings. Your data is retained for 30 days after cancellation, and no further follow-up emails will be sent."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} InvoiceFollow. Built for freelancers who deserve to get paid on time.
      </footer>
    </main>
  );
}
