import { Cog, ArrowUpRight, Users, Wrench, Images, Heart } from "lucide-react";
import { Link } from "wouter";

export function TypedHeadline() {
  return (
    <h1 className="typed-heading" aria-label="Innovate. Iterate. Inspire.">
      {["INNOVATE.", "ITERATE.", "INSPIRE."].map((word, index) => (
        <span className="typing-row" aria-hidden="true" key={word}>
          {word}<span className={`typing-word typing-word-${index}`}>{word}</span>
        </span>
      ))}
    </h1>
  );
}

export function TechGears() {
  return (
    <div className="tech-gears" aria-hidden="true">
      <Cog className="gear gear-large" strokeWidth={1} />
      <Cog className="gear gear-small" strokeWidth={1.2} />
      <span className="gear-orbit" />
    </div>
  );
}

export function ExplorePages() {
  const pages = [
    { path: "/team", label: "OUR PEOPLE", title: "Meet the minds.", text: "The students, the coach, and our shared purpose.", icon: Users },
    { path: "/season", label: "THE BUILD", title: "Follow the buzz.", text: "Meet Hornet V1 and explore the BIOBUZZ challenge.", icon: Wrench },
    { path: "/gallery", label: "THROUGH OUR LENS", title: "See it for yourself.", text: "Real workshop moments, CAD, and robot close-ups.", icon: Images },
    { path: "/support", label: "BUILD WITH US", title: "Make a difference.", text: "Support the team or start a conversation.", icon: Heart },
  ];
  return (
    <section className="wrap explore-pages">
      <div className="explore-heading"><span className="section-index">CHOOSE YOUR NEXT CONNECTION</span><p>Less scrolling. More discovering.</p></div>
      <div className="explore-grid">
        {pages.map(({ path, label, title, text, icon: Icon }, index) => (
          <Link href={path} className="explore-card" key={path}>
            <div className="explore-card-top"><span>0{index + 1} / {label}</span><Icon size={22} /></div>
            <h2>{title}</h2><p>{text}</p><ArrowUpRight className="explore-arrow" size={22} />
          </Link>
        ))}
      </div>
    </section>
  );
}