import { useState } from "react";
import "../styles/Faq.css";
import { closefaq, openfaq } from "../assets";
function Faq() {
  const [faq, setFaq] = useState([
    {
      ques: "Why should I opt for Tutedude?",
      ans: "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer.",
      open: false,
    },
    {
      ques: "What is the validity of the courses and when can I watch them?",
      ans: "You will have lifetime access to the courses and can watch the lectures anytime you want. So it is totally flexible and provides you the comfort of learning anytime anywhere. Also as the technologies progress we keep on updating our courses so you get the access to them too.",
      open: false,
    },
    {
      ques: "Will my course validity expire after I receive the 100% Refund amount ?",
      ans: "No, you will still have the lifetime access on your courses along with mentor's support, even after you have received your 100% Refund amount.",
      open: false,
    },
  ]);
  const handleToggleFaq = (idx) => {
    console.log(idx);
    setFaq(
      faq.map((item, i) => {
        if (i == idx) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="faq">
        <h2 className="section-heading">
          <span>Frequently Asked </span>
          <span className="section-heading-pink">Questions</span>
        </h2>
        <div className="faq-main">
          {faq.map((item, idx) => (
            <div
              className="faq-item"
              onClick={() => handleToggleFaq(idx)}
              key={idx}
            >
              <div className="faq-item-top">
                <div className="faq-item-top-ques">{item.ques}</div>
                <img
                  src={item.open ? openfaq : closefaq}
                  alt="Icon"
                  className="faq-item-top-icon"
                />
              </div>
              {item.open && (
                <div
                  className="faq-item-ans"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.ans}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
