import { ArrowUpRight, HeartHandshake, BookOpen, Users } from "lucide-react";

export function TeamStory() {
  return (
    <section id="about" className="about mission-section wrap section">
      <div className="section-index">01 / WHO WE ARE</div>
      <div className="about-content">
        <h2>
          BUILDING ROBOTS.
          <br />
          <span>FORMING LEADERS.</span>
        </h2>
        <div className="about-details">
          <p>
            We are FIRST Tech Challenge Team 19168, Totus Tuus, a high-achieving Catholic robotics
            team made up of young men in high school. Our team brings together students with a
            passion for engineering and personal growth.
          </p>
          <p>
            Built by students. For students. While we aim to become better engineers, our real goal
            is to form leaders and men.
          </p>
          <a href="#formation" className="text-link">
            Beyond the robot <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <div className="stats mission-stats">
        <div className="stat outline">
          <span>19168</span>
          <p>FIRST TECH CHALLENGE</p>
          <small>Totus Tuus. One team. A shared purpose.</small>
        </div>
        <div className="stat filled">
          <span>6</span>
          <p>CONSECUTIVE FTC SEASONS</p>
          <small>2026–2027 is our sixth year competing.</small>
        </div>
        <div className="stat meaning-stat">
          <span>
            ALL
            <br />
            YOURS.
          </span>
          <p>THE MEANING OF TOTUS TUUS</p>
          <small>Our name. Our belief. Our commitment.</small>
        </div>
      </div>
      <div className="mission-narrative">
        <div className="mission-name">
          <div className="section-index">OUR NAME / OUR PURPOSE</div>
          <h3>
            TOTUS TUUS.
            <br />
            <span>“ALL YOURS.”</span>
          </h3>
          <p>
            Our team name is Latin for “All Yours.” It represents our belief that everything we have
            is a gift from God. We strive to give those gifts back through our work and our
            commitment to excellence.
          </p>
        </div>
        <div className="mission-character">
          <h3>Excellence with character.</h3>
          <p>
            That commitment shapes how we approach robotics. We set ambitious goals and refuse to
            give up, instead adapting and persevering. We strive to practice discipline,
            perseverance, and service, treating our teammates, mentors, and opponents with Gracious
            Professionalism.
          </p>
          <p>
            For us, robotics is not just about winning—or even just about engineering. It is about
            developing a virtuous character that will serve us later in life, no matter what
            profession we choose.
          </p>
        </div>
      </div>
      <blockquote className="mission-pledge">
        We give our best. We learn from our failures.
        <br />
        <span>And we never ever give up.</span>
      </blockquote>
      <div id="formation" className="formation">
        <div className="section-top">
          <div>
            <div className="section-index">BEYOND ROBOTICS</div>
            <h3>
              FORMATION EXTENDS
              <br />
              <span>BEYOND THE ROBOT.</span>
            </h3>
          </div>
          <p>Engineering is only part of the journey.</p>
        </div>
        <div className="formation-grid">
          <div>
            <BookOpen size={27} />
            <h4>Faith & mentorship</h4>
            <p>
              We learn from mentors and participate in spiritual retreats and formation talks,
              growing in faith as well as technical skill.
            </p>
          </div>
          <div>
            <Users size={27} />
            <h4>Exercise & fellowship</h4>
            <p>
              We make time for physical exercise and fellowship. Our formation includes the habits
              and relationships that help us grow together.
            </p>
          </div>
          <div>
            <HeartHandshake size={27} />
            <h4>Service & STEM outreach</h4>
            <p>
              We seek to share our knowledge and passion for STEM through outreach in our community.
              There is more to share about that effort as our story develops.
            </p>
          </div>
        </div>
      </div>
      <div id="first" className="ftc-explainer">
        <div className="ftc-intro">
          <div className="section-index">THE PROGRAM BEHIND THE CHALLENGE</div>
          <h3>
            WHAT IS
            <br />
            <span>FIRST TECH CHALLENGE?</span>
          </h3>
          <p>
            FTC is a robotics competition where teams of high school students design, build,
            program, and operate robots to compete in a new challenge each season. The 2026–2027
            BIOBUZZ season is our sixth consecutive year competing.
          </p>
          <a
            href="https://www.firstinspires.org/programs/ftc/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Explore FIRST Tech Challenge <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="ftc-details">
          <details open>
            <summary>Engineering, strategy & alliances</summary>
            <p>
              Teams combine mechanical engineering, programming, electronics, design, and strategy
              to create a robot capable of completing tasks on the competition field. Matches
              require a good robot, good drivers, and excellent teamwork; each team competes
              alongside an alliance partner.
            </p>
            <p>
              Winning matches is not the only path to success. Awards recognizing achievements such
              as outreach, innovation, and engineering excellence can also provide a path to
              advancement.
            </p>
          </details>
          <details>
            <summary>Iteration is fundamental</summary>
            <p>
              FTC helps students develop skills in problem-solving, leadership, and teamwork, as
              well as engineering. Teams continually improve their robots throughout the season,
              which runs from September to May, while building on their knowledge, skills, and tools
              across years of competing in completely different challenges.
            </p>
          </details>
          <details>
            <summary>Gracious Professionalism</summary>
            <p>
              Equally important to FTC is the principle of Gracious Professionalism: treating
              teammates, opponents, mentors, volunteers, and everyone else with respect and courtesy
              while striving for excellence.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
