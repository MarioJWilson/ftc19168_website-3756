import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { teamEmail } from "../lib/contact";

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm("mdegolnq");
  return (
    <div className="contact-popup">
      <div className="eyebrow">TOTUS TUUS / OPEN A CONNECTION</div>
      <h2>LET’S <span>TALK.</span></h2>
      {state.succeeded ? (
        <div className="form-success" aria-live="polite">
          <CheckCircle2 size={36} />
          <h3>Message submitted.</h3>
          <p>Thanks for reaching out. You’ve sent your message to the team’s contact form.</p>
          <button className="button mint" onClick={reset}>Write another message <ArrowUpRight size={17} /></button>
        </div>
      ) : (
        <>
          <p>Joining the team, supporting the build, or just curious? Send us a message.</p>
          <form action="https://formspree.io/f/mdegolnq" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="contact-email">Your email</label>
            <input id="contact-email" aria-label="Your email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={state.submitting} />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" aria-label="Subject" name="subject" type="text" placeholder="What would you like to talk about?" required maxLength={200} disabled={state.submitting} />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} className="form-error" />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" aria-label="Message" name="message" rows={5} placeholder="Tell us a little more…" required maxLength={5000} disabled={state.submitting} />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Leave this empty</label>
              <input id="contact-website" aria-label="Leave this empty" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <div role="alert"><ValidationError errors={state.errors} className="form-error" /></div>
            <button className="button mint" type="submit" disabled={state.submitting}>
              <Send size={17} /> {state.submitting ? "Sending…" : "Send message"}
            </button>
            <small>Your message and email are sent securely through Formspree. We use your email to reply.</small>
          </form>
          <a className="contact-fallback" href={`mailto:${teamEmail}`}>Prefer email? {teamEmail} <ArrowUpRight size={13} /></a>
        </>
      )}
    </div>
  );
}