import {
  ArrowUpRight,
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { phoneUrl, whatsappUrl } from "../lib/contact";

export function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") return <Instagram size={19} />;
  if (name === "Facebook") return <Facebook size={19} />;
  if (name === "YouTube") return <Youtube size={19} />;
  if (name === "TikTok") return <Music2 size={19} />;
  return (
    <span className="x-mark" aria-hidden="true">
      X
    </span>
  );
}

export function TeamContact({ onContact }: { onContact: () => void }) {
  return (
    <section className="compact-contact wrap">
      <div><span className="section-index">LET’S BUILD A CONNECTION</span><h3>Questions? We’re listening.</h3></div>
      <div className="compact-contact-actions">
        <button className="button mint" onClick={onContact}><Mail size={17} /> Contact us <ArrowUpRight size={17} /></button>
        <a href={phoneUrl}><Phone size={16} /> +1 (708) 971-9232</a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
      </div>
    </section>
  );
}
