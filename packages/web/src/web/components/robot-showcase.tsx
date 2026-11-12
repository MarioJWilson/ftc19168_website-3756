import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { hornetPhotos } from "../lib/robot";

export function RobotShowcase({
  onView,
  onGallery,
}: {
  onView: (index: number) => void;
  onGallery: () => void;
}) {
  return (
    <section id="robot" className="robot-showcase section wrap">
      <div className="section-top">
        <div>
          <div className="section-index">OUR ROBOT / BIOBUZZ 2026–2027</div>
          <h2>
            MEET <span>HORNET.</span>
          </h2>
        </div>
        <div className="robot-status">
          <span className="dot" /> CURRENT ROBOT <span className="version-tag">V1</span>
        </div>
      </div>
      <div className="robot-feature">
        <button
          className="robot-main-photo"
          onClick={() => onView(0)}
          aria-label="Enlarge Hornet V1 front angled view"
        >
          <img
            src={hornetPhotos[0].src}
            alt="Hornet V1 on the workbench, showing the TPU star intake and sorting assembly"
            loading="lazy"
          />
          <span>
            HORNET / VERSION 1 <ArrowUpRight size={23} />
          </span>
        </button>
        <div className="robot-story">
          <Sparkles size={28} />
          <h3>
            BUILT TO
            <br />
            GRAB. SORT.
            <br />
            <span>LET IT FLY.</span>
          </h3>
          <p>
            Hornet is our 2026–2027 V1 robot. She grabs Nectar and Pollen with compliant TPU stars,
            moves them up through a size-based sorting system, and releases them through a dual
            turret.
          </p>
          <Link href="/gallery" className="button mint" onClick={onGallery}>
            Explore Hornet’s photos <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="robot-process">
        <div>
          <span className="process-number">
            01 <ArrowRight size={19} />
          </span>
          <h3>GRAB.</h3>
          <p>Compliant TPU stars bring Nectar and Pollen into the robot.</p>
        </div>
        <div>
          <span className="process-number">
            02 <ArrowRight size={19} />
          </span>
          <h3>SORT.</h3>
          <p>A size-based sorting system moves the game pieces up and separates them.</p>
        </div>
        <div>
          <span className="process-number">
            03 <ArrowUpRight size={19} />
          </span>
          <h3>RELEASE.</h3>
          <p>A dual turret sends the sorted game pieces back out.</p>
        </div>
      </div>
      <div className="robot-details-strip">
        {hornetPhotos.slice(1).map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => onView(index + 1)}
            aria-label={`Enlarge ${photo.title}`}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <span>
              {["Nectar intake", "Pollen turret", "Top view", "Build collage"][index]}{" "}
              <ArrowUpRight size={17} />
            </span>
          </button>
        ))}
      </div>
      <p className="robot-video-note">More from the build: robot videos coming soon.</p>
    </section>
  );
}
