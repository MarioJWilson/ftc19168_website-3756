import { ArrowUpRight } from "lucide-react";

export function BioBuzzGuide({ onField }: { onField: () => void }) {
  return (
    <div className="wrap biobuzz-guide">
      <div className="buzz-intro">
        <div>
          <div className="section-index">WHAT’S THE BUZZ WITH BIOBUZZ?</div>
          <h3>
            COLLECT. SCORE.
            <br />
            <span>MAKE THE HIVE TIP.</span>
          </h3>
          <p>
            BIOBUZZ is the 2026–2027 FTC game. Robots collect Pollen (small balls) and Nectar
            (larger balls), then score them in the Flowers and Hives.
          </p>
          <div className="game-pieces">
            <span>
              <i className="pollen-dot" /> POLLEN <small>Small balls</small>
            </span>
            <span>
              <i className="nectar-dot" /> NECTAR <small>Larger balls</small>
            </span>
          </div>
        </div>
        <button onClick={onField} className="buzz-field" aria-label="Enlarge BIOBUZZ field">
          <img
            src="/images/biobuzz-field.jpg"
            alt="BIOBUZZ playing field with Hives and Flowers"
            loading="lazy"
          />
          <span>
            Explore the playing field <ArrowUpRight size={19} />
          </span>
        </button>
      </div>
      <div className="buzz-rules">
        <div>
          <span className="rule-number">01 / COLLECT</span>
          <h4>Pollen & Nectar</h4>
          <p>
            Bring both sizes of game pieces into the robot and prepare them for scoring in the Hives
            and Flowers.
          </p>
        </div>
        <div>
          <span className="rule-number">02 / THE HIVES</span>
          <h4>Tip the Hive. Earn 20.</h4>
          <p>
            Each alliance has a Hive at the center of the field, containing two Cells. Robots launch
            Pollen and Nectar into the upward-facing Cell. Enough balls tip the Hive, earning 20
            points and allowing that alliance to introduce another Nectar into the game.
          </p>
        </div>
        <div>
          <span className="rule-number">03 / THE FLOWERS</span>
          <h4>The final minute matters.</h4>
          <p>
            Flowers can be filled during the final minute of the match. The highest Nectar of an
            alliance’s color determines who owns each Flower and receives its points.
          </p>
        </div>
        <div>
          <span className="rule-number">04 / FINISH STRONG</span>
          <h4>Park in the Loading Zone.</h4>
          <p>
            At the end of the match, robots can earn additional points by parking in their Loading
            Zone.
          </p>
        </div>
      </div>
      <div className="rules-source">
        <p>
          A quick introduction to the game. Consult the official manual for complete rules, scoring,
          and updates.
        </p>
        <a
          href="https://ftc-resources.firstinspires.org/ftc/game/manual"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Official competition manual <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  );
}
