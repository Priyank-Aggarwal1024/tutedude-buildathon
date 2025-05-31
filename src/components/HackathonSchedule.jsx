import React from "react";
import "../styles/hackathonSchedule.css";
function HackathonSchedule() {
  return (
    <div className="hackathon-schedule">
      <div className="hacksch-left-design  hacksch-left-design-horizontal ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="hacksch-left-design  hacksch-left-design-vertical ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="hacksch-right-design  hacksch-right-design-horizontal ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="hacksch-right-design  hacksch-right-design-vertical ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="hacksch-circle-left"></div>
      <div className="hacksch-circle-right"></div>
      <h2 className="hackathon-schedule-heading">
        The <span className="fw-700">Buildathon</span> Schedule{" "}
      </h2>
      <div className="hackathon-schedule-cards">
        <div className="hackathon-schedule-card">
          <div className="hack-sch-card-top hack-sch-parent">
            <div className="hack-sch-card-arrow">Step 1</div>
            <div className="hack-sch-arrow-stick"></div>
            <div className="hack-sch-animation hack-sch-animation-1"></div>
          </div>
          <div className="hack-sch-card-bottom">
            <div className="hscb-top">
              <div className="hscb-date">
                12<sup>th</sup> JUNE
              </div>
              <div className="hscb-topic">Buildathon Launch</div>
            </div>
            <div className="hscb-horizontal"></div>
            <div className="hscb-bottom">
              <div className="hscb-time">
                <span className="hscb-time-dot"></span>
                6:50pm Reporting Time
              </div>
              <div className="hscb-time">
                <span className="hscb-time-dot"></span>
                7:00pm Opening Ceremony
              </div>
            </div>
          </div>
        </div>
        <div className="hackathon-schedule-card">
          <div className="hack-sch-card-top hack-sch-parent">
            <div className="hack-sch-card-arrow">Step 2</div>
            <div className="hack-sch-arrow-stick"></div>
            <div className="hack-sch-animation hack-sch-animation-2"></div>
          </div>
          <div className="hack-sch-card-bottom">
            <div className="hscb-top">
              <div className="hscb-date">
                15<sup>th</sup> JUNE
              </div>
              <div className="hscb-topic">Final Submission</div>
            </div>
            <div className="hscb-horizontal"></div>
            <div className="hscb-bottom">
              <div className="hscb-time">
                <span className="hscb-time-dot"></span>
                11:30pm Submit your team work.
              </div>
              <div className="hscb-time">
                <span className="hscb-time-dot"></span>
                Submit video solution & Product URL.
              </div>
            </div>
          </div>
        </div>
        <div className="hackathon-schedule-card">
          <div className="hack-sch-card-top">
            <div className="hack-sch-card-arrow">Step 3</div>
          </div>
          <div className="hack-sch-card-bottom">
            <div className="hscb-top">
              <div className="hscb-date">
                22<sup>th</sup> JUNE
              </div>
              <div className="hscb-topic">Final Results </div>
            </div>
            <div className="hscb-horizontal"></div>
            <div className="hscb-bottom">
              <div className="hscb-time">
                <span className="hscb-time-dot"></span>Winner Announcement
              </div>
              <div className="hscb-time">
                <span className="hscb-time-dot"></span>Prize money and
                Certificate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathonSchedule;
