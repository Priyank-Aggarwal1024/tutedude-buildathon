import { join1, join2, join3, join4 } from "../assets";
import "../styles/Join.css";
function Join() {
  const cards = [
    {
      img: join1,
      head: "Developers & Engineers",
      detail:
        "Transform complex problems into elegant code. You build the logic that powers tomorrow.",
    },
    {
      img: join2,
      head: "Designers (UI/UX, Product, Visual)",
      detail:
        "Craft seamless experiences and stunning visuals. Your design will shape how the world interacts.",
    },
    {
      img: join3,
      head: "Hustlers who can build & ship",
      detail:
        "Bring ideas to life, connect the dots, ship the real thing. You turn concepts into working products — fast and functional.",
    },
    {
      img: join4,
      head: "Builders",
      detail:
        "Bring ideas to life, connect the dots, ship the real thing. You turn concepts into working products — fast and functional.",
    },
  ];
  return (
    <>
      <div className="join">
        <div className="join-top">
          <h2 className="section-heading">
            <span>Who can </span>
            <span className="section-heading-pink">Join</span>
            <span className="fw-700">?</span>
          </h2>
          <p className="join-top-para"></p>
        </div>
        <div className="join-bottom">
          {cards.map((item, idx) => (
            <div className="join-bottom-card" key={idx}>
              <div className="join-bottom-card-top">
                <img src={item.img} alt={item.head} />
              </div>
              <div className="join-bottom-card-bottom">
                <div className="join-bcb-head">{item.head}</div>
                <div className="join-bcb-dedtail">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Join;
