import "../styles/HackathonSteps.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import step6 from "../assets/step6.png";
function HackathonSteps() {
  const stepsData = [
    {
      img: step1,
      no: 1,
      head: "Register Your Team (3-5 members)",
      cont: "Gather your crew and sign up to start your buildathon journey.",
    },
    {
      img: step2,
      no: 2,
      head: "Receive the Challenge Brief",
      cont: "Get the challenge brief document and start brainstorming your crazy idea.",
    },
    {
      img: step3,
      no: 3,
      head: "Submit your Unique Idea ",
      cont: "Each team will submit an Idea and try to build a solution in given time.  ",
    },
    {
      img: step4,
      no: 4,
      head: "Build & submit  Your Product Online",
      cont: "Bring your innovative and real solution  and deploy it for the world to see.",
    },
    {
      img: step5,
      no: 5,
      head: "Shortlisting and submission review ",
      cont: "Our team will review your solution explanation video and give you score on different parameters. ",
    },
    {
      img: step6,
      no: 6,
      head: "Win Cash Prizes with certificate",
      cont: "Stand out, grab the prize, and earn the glory of being the best.",
    },
  ];
  return (
    <>
      <div className="hackathon-steps">
        <div className="hackathon-steps-heading">
          <span>Simple Steps to </span>
          <span className="hackathon-steps-heading-pink"> Start Building</span>
        </div>
        <div className="hackathon-steps-main">
          {stepsData.map((item, idx) => (
            <div
              className={`hackathon-steps-step hackathon-steps-step-${item.no}`}
              key={idx}
            >
              <div className="hackathon-steps-step-left">
                <div className="hackathon-steps-step-left-img">
                  <img src={item.img} alt={item.head} />
                  {item.no == 6 && (
                    <div className="hackathon-ssli-cashprize">
                      <span>Cash prize </span>
                      <div className="hackathon-ssli-cashprize-orange">
                        ₹10,000
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="hackathon-steps-step-right">
                <div className="hackathon-ssr-no">{item.no}</div>
                <div className="hackathon-ssr-head">{item.head}</div>
                <div className="hackathon-ssr-cont">{item.cont}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HackathonSteps;
