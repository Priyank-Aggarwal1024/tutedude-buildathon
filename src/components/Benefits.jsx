import {
  PeersSvg,
  PortfolioSvg,
  RecordSvg,
  TechCommunitiesSvg,
} from "../assets";
import "../styles/Benefits.css";
function Benefits() {
  return (
    <>
      <div className="benefits">
        <div className="benefits-top">
          <h2 className="section-heading">
            <span>Key Benefits of </span>
            <span className="section-heading-pink">Buildathon</span>
          </h2>
          <p className="benefits-top-para">
            Yes, there's ₹10,000 up for grabs — but that's just the beginning.
          </p>
        </div>
        <div className="benefits-cards">
          <div className="benefits-card">
            <div className="benefits-card-oval"></div>
            <div className="benefits-card-icon">
              <PortfolioSvg />
            </div>
            <div className="benefits-card-para">
              Boost your portfolio & resume
            </div>
          </div>
          <div className="benefits-card">
            <div className="benefits-card-oval"></div>

            <div className="benefits-card-icon">
              <RecordSvg />
            </div>
            <div className="benefits-card-para">
              Build something meaningful in record time
            </div>
          </div>
          <div className="benefits-card">
            <div className="benefits-card-oval"></div>

            <div className="benefits-card-icon">
              <PeersSvg />
            </div>
            <div className="benefits-card-para">
              Collaborate with passionate peers
            </div>
          </div>
          <div className="benefits-card">
            <div className="benefits-card-oval"></div>

            <div className="benefits-card-icon">
              <TechCommunitiesSvg />
            </div>
            <div className="benefits-card-para">
              Get noticed by tech communities
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
