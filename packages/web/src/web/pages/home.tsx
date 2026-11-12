import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Plus,
  Trophy,
  Code2,
  Wrench,
  Users,
  Mail,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { galleryItems, galleryFilters, gameFields, hornetStartIndex } from "../lib/gallery";
import { TeamStory } from "../components/team-story";
import { BioBuzzGuide } from "../components/biobuzz-guide";
import { RobotShowcase } from "../components/robot-showcase";
import { TeamContact, SocialIcon } from "../components/team-contact";
import { donateUrl, socialLinks, teamEmail, whatsappUrl } from "../lib/contact";
import { members } from "../lib/members";
import { MemberBadges } from "../components/member-badges";
import { FieldBadge } from "../components/field-badge";
import { ContactForm } from "../components/contact-form";
import { TypedHeadline, TechGears, ExplorePages } from "../components/tech-effects";

const links = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Season & Robot", path: "/season" },
  { name: "Gallery", path: "/gallery" },
  { name: "Support", path: "/support" },
];
type Popup = { type: "member"; index: number } | { type: "gallery"; index: number } | { type: "contact" };
function Geometry({ className = "" }: { className?: string }) {
  return (
    <div className={`geometry ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}
export default function Home() {
  const [page] = useLocation();
  const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState<Popup | null>(null);
  const [galleryFilter, setGalleryFilter] = useState("All photos");
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const main = useRef<HTMLElement>(null);
  const firstPage = useRef(true);
  useEffect(() => {
    setMenu(false);
    setPopup(null);
    window.scrollTo({ top: 0, behavior: "instant" });
    const title = links.find((link) => link.path === page)?.name ?? "Page not found";
    document.title = `Totus Tuus · ${title} · FTC 19168`;
    if (!firstPage.current) main.current?.focus({ preventScroll: true });
    firstPage.current = false;
  }, [page]);
  useEffect(() => {
    if (popup) {
      if (!dialog.current?.open) {
        returnFocus.current = document.activeElement as HTMLElement;
      }
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      if (returnFocus.current?.isConnected) returnFocus.current.focus({ preventScroll: true });
      returnFocus.current = null;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);
  useEffect(() => {
    const element = dialog.current;
    const closeBackdrop = (e: MouseEvent) => {
      if (e.target === element) setPopup(null);
    };
    element?.addEventListener("click", closeBackdrop);
    return () => element?.removeEventListener("click", closeBackdrop);
  }, []);
  const contact = () => {
    setMenu(false);
    setPopup({ type: "contact" });
  };
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header id="top" className="header">
        <Link href="/" className="brand" aria-label="Totus Tuus home">
          <img src="/images/crest-cutout.png" alt="Totus Tuus crest" />
          <span>
            TOTUS TUUS<small>FIRST TECH CHALLENGE · 19168</small>
          </span>
        </Link>
        <nav aria-label="Main navigation" className={menu ? "open" : ""}>
          {links.map((l) => (
            <Link key={l.path} href={l.path} aria-current={page === l.path ? "page" : undefined} onClick={() => setMenu(false)}>
              {l.name}
            </Link>
          ))}
          <button className="button light small" onClick={contact}>
            Contact us <ArrowUpRight size={15} />
          </button>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main" ref={main} tabIndex={-1}>
        {page === "/" && <>
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" /> FIRST TECH CHALLENGE TEAM 19168
            </div>
            <TypedHeadline />
            <p>
              Totus Tuus is a Catholic robotics team of young men in high school, united by a
              passion for engineering, personal growth, and excellence.
            </p>
            <Link href="/team" className="button mint">
              Meet the team <ArrowUpRight size={19} />
            </Link>
            <Link className="text-link" href="/season">
              Explore our season <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-art">
            <div className="art-grid" />
            <span className="art-label">BUILT BY STUDENTS. FOR STUDENTS.</span>
            <div className="frame f1" />
            <div className="frame f2" />
            <div className="frame f3" />
            <TechGears />
            <span className="giant-number" aria-hidden="true">
              19168
            </span>
            <img
              className="hero-crest"
              src="/images/crest-cutout.png"
              alt="Team 19168 Totus Tuus crest with engineering, tools, and coding symbols"
            />
            <Geometry className="hero-geometry" />
            <div className="art-bottom">
              <span>DESIGN. CODE. ACHIEVE.</span>
              <span>FTC / 19168 ↗</span>
            </div>
          </div>
          <div className="hero-foot">
            <span className="terminal-status"><span className="dot" /> SYSTEM ONLINE / TEAM 19168<span className="terminal-cursor">_</span></span>
            <Link href="/team">
              Get to know us <span>↗</span>
            </Link>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>INNOVATE.</span>
          <Plus />
          <span>ITERATE.</span>
          <Plus />
          <span>INSPIRE.</span>
          <Plus />
          <span>INNOVATE.</span>
          <Plus />
        </div>
        <ExplorePages />
        </>}
        {page === "/team" && <>
        <section id="team" className="wrap section team">
          <div className="section-top">
            <div>
              <div className="section-index">02 / OUR PEOPLE</div>
              <h2>
                DIFFERENT MINDS.
                <br />
                <span>ONE TEAM.</span>
              </h2>
            </div>
            <p>
              The faces behind Totus Tuus.
              <br />
              Get to know our team.
            </p>
          </div>
          <div className="people-grid">
            {members.map((member, i) => (
              <button
                className="person"
                key={member.name}
                aria-label={`View profile: ${member.name}`}
                onClick={() => setPopup({ type: "member", index: i })}
              >
                <div className="portrait">
                  <span className="portrait-index">{member.coach ? "COACH / TT" : `${String(i + 1).padStart(2, "0")} / TT`}</span>
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <FieldBadge role={member.fieldRole} />
                  <div className="portrait-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
                <div className="person-info">
                  <h3>{member.name}</h3>
                  <span>
                    View profile <Plus size={15} />
                  </span>
                </div>
                <MemberBadges specializations={member.specializations} />
                <p className="member-roles">{member.roles.join(" · ")}</p>
              </button>
            ))}
            <div className="join-panel">
              <Users size={32} />
              <h3>
                YOUR NEXT
                <br />
                CHALLENGE
                <br />
                STARTS HERE.
              </h3>
              <p>Interested in building with us?</p>
              <button className="text-link" onClick={contact}>
                Get in touch <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>
        <details className="page-disclosure wrap">
          <summary>Our mission, faith & life beyond robotics <Plus size={22} /></summary>
          <TeamStory />
        </details>
        </>}
        {page === "/season" && <>
        <section id="season" className="season section">
          <div className="wrap season-grid">
            <div>
              <div className="section-index">03 / THE CURRENT CHALLENGE</div>
              <h2>
                WHAT’S THE BUZZ
                <br />
                <span>WITH BIOBUZZ?</span>
              </h2>
              <p>
                The 2026–2027 FIRST Tech Challenge season is BIOBUZZ™ presented by RTX, part of
                FIRST CANOPY™. Discover the challenge and the world of ideas it opens up.
              </p>
              <a
                className="button mint"
                href="https://www.firstinspires.org/programs/ftc/game-and-season"
                target="_blank"
                rel="noreferrer"
              >
                Explore BIOBUZZ <ArrowUpRight size={18} />
              </a>
              <div className="season-note">
                <span className="dot" /> EXPLORE THE CHALLENGE & OUR BUILD
              </div>
            </div>
            <a
              href="https://www.firstinspires.org/programs/ftc/game-and-season"
              target="_blank"
              rel="noreferrer"
              className="season-art"
            >
              <span>2026–2027 / OFFICIAL SEASON</span>
              <img
                src="/images/biobuzz.png"
                alt="FIRST Tech Challenge BIOBUZZ presented by RTX"
                loading="lazy"
              />
              <span>
                BIG IDEAS START WITH A LITTLE CURIOSITY. <ArrowUpRight size={22} />
              </span>
            </a>
          </div>
          <details className="page-disclosure wrap season-disclosure">
            <summary>How BIOBUZZ works <Plus size={22} /></summary>
            <BioBuzzGuide onField={() => setPopup({ type: "gallery", index: 6 })} />
          </details>
          <details className="page-disclosure wrap season-disclosure">
            <summary>Inside the workshop & playing field <Plus size={22} /></summary>
          <div className="wrap build-spotlight">
            <button className="build-photo" onClick={() => setPopup({ type: "gallery", index: 1 })}>
              <img
                src="/images/workshop-01.jpg"
                alt="A robot and electronics on a workbench during a workshop session"
                loading="lazy"
              />
              <span>
                Inside the workshop <ArrowUpRight size={22} />
              </span>
            </button>
            <div>
              <div className="section-index">FROM THE SCREEN TO THE WORKBENCH</div>
              <h3>
                THIS IS WHERE
                <br />
                <span>IDEAS GET REAL.</span>
              </h3>
              <p>
                CAD on screen. Components on the table. A closer look at the hands-on work behind
                the build.
              </p>
              <Link
                href="/gallery"
                className="text-link"
                onClick={() => setGalleryFilter("Workshop & CAD")}
              >
                See the build photos <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="wrap field-references">
            <div className="field-header">
              <h3>The playing field.</h3>
              <p>Current and past game references—not a record of team results.</p>
            </div>
            <div className="field-grid">
              {gameFields.map((index) => (
                <button
                  key={index}
                  className="field-card"
                  onClick={() => setPopup({ type: "gallery", index })}
                >
                  <img
                    src={galleryItems[index].src}
                    alt={galleryItems[index].title}
                    loading="lazy"
                  />
                  <span>
                    {galleryItems[index].title} <ArrowUpRight size={18} />
                  </span>
                </button>
              ))}
            </div>
          </div>
          </details>
        </section>
        <RobotShowcase
          onView={(index) => setPopup({ type: "gallery", index: hornetStartIndex + index })}
          onGallery={() => setGalleryFilter("Hornet V1")}
        />
        </>}
        {page === "/gallery" &&
        <section id="gallery" className="wrap section gallery">
          <div className="section-top">
            <div>
              <div className="section-index">04 / THROUGH OUR LENS</div>
              <h2>
                THE PEOPLE.
                <br />
                THE <span className="orange">POSSIBILITIES.</span>
              </h2>
            </div>
            <div className="filters" aria-label="Gallery filters">
              {galleryFilters.map((f) => (
                <button
                  key={f}
                  className={f === galleryFilter ? "active" : ""}
                  aria-pressed={f === galleryFilter}
                  onClick={() => setGalleryFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="gallery-grid photo-gallery">
            {galleryItems
              .map((item, index) => ({ item, index }))
              .sort(
                (a, b) =>
                  Number(b.item.category === "Hornet V1") - Number(a.item.category === "Hornet V1"),
              )
              .filter(
                ({ item }) => galleryFilter === "All photos" || item.category === galleryFilter,
              )
              .map(({ item, index }) => (
                <button
                  className={`gallery-image ${item.category === "Portraits" ? "portrait-photo" : item.category === "Team identity" ? "crest-tile" : "scene-photo"}`}
                  key={item.src}
                  onClick={() => setPopup({ type: "gallery", index })}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <FieldBadge role={members.find((member) => member.image === item.src)?.fieldRole} />
                  <span>
                    {item.title} <ArrowUpRight size={20} />
                  </span>
                </button>
              ))}
          </div>
          <p className="caption">
            Workshop moments, CAD exploration, and the people behind the build. Field diagrams and
            the sample robot are reference imagery.
          </p>
        </section>}
        {page === "/team" && <details className="page-disclosure wrap">
          <summary>Awards & milestones <Plus size={22} /></summary>
        <section id="awards" className="wrap awards section">
          <div>
            <div className="section-index">05 / OUR JOURNEY</div>
            <h2>
              EVERY STEP
              <br />
              <span>IS EARNED.</span>
            </h2>
            <p>Celebrating the work, the learning, and the moments that bring us together.</p>
          </div>
          <div className="award-placeholder">
            <Trophy size={35} />
            <h3>Our story is still being added.</h3>
            <p>
              Verified awards, event results, and season milestones will live here. Details coming
              soon.
            </p>
            <a
              href="https://ftc-events.firstinspires.org/"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Explore official FTC results <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        </details>}
        {page === "/support" && <details className="page-disclosure wrap partner-disclosure">
          <summary>Partner with Totus Tuus <Plus size={22} /></summary>
        <section id="sponsors" className="sponsors section">
          <div className="wrap">
            <div className="section-top">
              <div>
                <div className="section-index">06 / BUILD WITH US</div>
                <h2>
                  BIG IDEAS NEED
                  <br />
                  <span>GREAT SUPPORT.</span>
                </h2>
              </div>
              <p>
                Help the next generation of builders
                <br />
                take their next step.
              </p>
            </div>
            <div className="sponsor-row">
              <div className="sponsor-slot">
                <Plus />
                <span>YOUR LOGO COULD BE HERE</span>
              </div>
              <div>
                <h3>A place for our partners.</h3>
                <p>
                  Sponsor names and logos will be added once confirmed. Support can help with parts,
                  tools, and opportunities to learn.
                </p>
                <button onClick={contact} className="text-link">
                  Become a sponsor <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
        </details>}
        {page === "/season" && <details className="page-disclosure wrap">
          <summary>News & resources from FIRST <Plus size={22} /></summary>
        <section id="news" className="wrap section news">
          <div className="section-top">
            <div>
              <div className="section-index">07 / STAY CURIOUS</div>
              <h2>
                FROM THE
                <br />
                <span>WORLD OF FIRST.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://community.firstinspires.org/topic/ftc"
              target="_blank"
              rel="noreferrer"
            >
              All FIRST updates <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="news-grid">
            <a
              className="news-card featured"
              href="https://www.firstinspires.org/first-canopy"
              target="_blank"
              rel="noreferrer"
            >
              <span className="eyebrow">2026–2027 SEASON</span>
              <Geometry />
              <h3>
                Meet FIRST CANOPY.
                <br />
                Explore what’s next.
              </h3>
              <span className="news-bottom">
                Discover the official season <ArrowUpRight />
              </span>
            </a>
            <a
              className="news-card"
              href="https://community.firstinspires.org/topic/ftc"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={32} />
              <span className="eyebrow">COMMUNITY & NEWS</span>
              <h3>
                Ideas, updates,
                <br />
                and inspiration.
              </h3>
              <span className="news-bottom">
                Read the FTC blog <ArrowUpRight />
              </span>
            </a>
            <a
              className="news-card"
              href="https://www.firstinspires.org/resources/library"
              target="_blank"
              rel="noreferrer"
            >
              <Wrench size={32} />
              <span className="eyebrow">TOOLS FOR BUILDERS</span>
              <h3>
                Keep learning.
                <br />
                Keep building.
              </h3>
              <span className="news-bottom">
                Explore FIRST resources <ArrowUpRight />
              </span>
            </a>
          </div>
        </section>
        </details>}
        {page === "/support" && <>
        <section id="support" className="support section wrap">
          <Geometry />
          <div className="section-index">THE NEXT CHAPTER STARTS WITH YOU</div>
          <h2>
            HELP US BUILD
            <br />
            <span>WHAT’S NEXT.</span>
          </h2>
          <p>
            Support the ideas. Support the team.
            <br />
            Be part of the Totus Tuus journey.
          </p>
          <div className="support-actions">
            <a className="button mint" href={donateUrl} target="_blank" rel="noreferrer">
              <Heart size={18} /> Donate on GoFundMe <ArrowUpRight size={18} />
            </a>
            <button className="button outline-button" onClick={contact}>
              Become a partner <ArrowUpRight size={18} />
            </button>
          </div>
          <small>Secure donations are handled by GoFundMe.</small>
        </section>
        <TeamContact onContact={contact} />
        </>}
        {!links.some((link) => link.path === page) && <section className="wrap section"><h1>PAGE NOT FOUND.</h1><p>This connection doesn’t exist yet.</p><Link href="/" className="button mint">Back home <ArrowUpRight size={18} /></Link></section>}
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/">
              <img src="/images/crest-cutout.png" alt="" />
              <span>
                TOTUS TUUS<small>FIRST TECH CHALLENGE · 19168</small>
              </span>
            </Link>
            <p className="footer-catchphrase">INNOVATE. ITERATE. INSPIRE.</p>
            <small className="footer-student-line">Built by students. For students.</small>
          </div>
          <div>
            <span className="footer-label">EXPLORE</span>
            <Link href="/team">Our team & mission</Link>
            <Link href="/season">Our season & Hornet</Link>
            <Link href="/gallery">Photo gallery</Link>
          </div>
          <div>
            <span className="footer-label">GET INVOLVED</span>
            <Link href="/support">Sponsorship</Link>
            <a href={donateUrl} target="_blank" rel="noreferrer">
              Support the team
            </a>
            <button onClick={contact}>Contact us</button>
          </div>
          <div className="socials">
            <span className="footer-label">FOLLOW THE JOURNEY</span>
            <div>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                >
                  <SocialIcon name={link.name} />
                </a>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <span className="wa-mark">WA</span>
              </a>
              <a href={`mailto:${teamEmail}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Totus Tuus · Team 19168</span>
          <span>FIRST® is a registered trademark of FIRST.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        aria-modal="true"
        aria-label={popup?.type === "contact" ? "Contact Totus Tuus" : "Totus Tuus details"}
        tabIndex={-1}
        className="dialog"
        onCancel={() => setPopup(null)}
      >
        <div className="dialog-inner">
          <button className="dialog-close" aria-label="Close dialog" onClick={() => setPopup(null)}>
            <X />
          </button>
          {popup?.type === "contact" && <ContactForm />}
          {popup?.type === "member" && (
            <>
              <div className="modal-portrait">
                <img
                  src={members[popup.index].image}
                  alt={members[popup.index].name}
                />
                <FieldBadge role={members[popup.index].fieldRole} />
              </div>
              <div className="eyebrow">{members[popup.index].coach ? "MEET OUR COACH" : "MEET TOTUS TUUS"}</div>
              <h2>{members[popup.index].name}</h2>
              <MemberBadges specializations={members[popup.index].specializations} />
              <p className="member-roles">{members[popup.index].roles.join(" · ")}</p>
              <p className="member-bio">{members[popup.index].bio}</p>
            </>
          )}
          {popup?.type === "gallery" && (
            <>
              <div className="lightbox-photo"><img
                className="lightbox-image"
                src={galleryItems[popup.index].src}
                alt={galleryItems[popup.index].title}
              />
              <FieldBadge role={members.find((member) => member.image === galleryItems[popup.index].src)?.fieldRole} /></div>
              <div className="lightbox-bottom">
                <button
                  aria-label="Previous image"
                  onClick={() =>
                    setPopup({
                      type: "gallery",
                      index: (popup.index + galleryItems.length - 1) % galleryItems.length,
                    })
                  }
                >
                  <ChevronLeft />
                </button>
                <h3>{galleryItems[popup.index].title}</h3>
                <button
                  aria-label="Next image"
                  onClick={() =>
                    setPopup({ type: "gallery", index: (popup.index + 1) % galleryItems.length })
                  }
                >
                  <ChevronRight />
                </button>
              </div>
              <p className="lightbox-caption">{galleryItems[popup.index].description}</p>
              <span className="image-count">
                {popup.index + 1} / {galleryItems.length}
              </span>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
