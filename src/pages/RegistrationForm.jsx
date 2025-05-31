import { useState } from "react";
import "../styles/RegistrationForm.css";
import { useNavigate } from "react-router-dom";
import { validateTeamMemberError } from "../utils";
const formInputs = [
  [
    {
      label: "Team name:",
      name: "team",
      placeholder: "Enter team name",
      type: "text",
    },
    {
      label: "Number of Team Members: ",
      name: "no-of-member",
      placeholder: "Team Members limits 3-5",
    },
  ],

  [
    {
      label: "Member Name:",
      name: "member-name",
      placeholder: "Enter team member name",
      type: "text",
    },
    {
      label: "Email:",
      name: "email",
      placeholder: "Enter email",
      type: "email",
    },
    {
      label: "Whatsapp Number :",
      name: "whatsapp-no",
      placeholder: "Enter Whatsapp number",
      type: "text",
    },
  ],
];
const initialData = {
  team: "",
  "no-of-member": 0,
  members: [],
};
const initialMember = {
  "member-name": "",
  email: "",
  "whatsapp-no": "",
};
function RegistrationForm() {
  const [tab, setTab] = useState(0);
  const [member, setMember] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(initialMember);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    let { name, value } = target;
    if (name == "no-of-member") {
      value = Number(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeMember = ({ target }) => {
    setError(initialMember);
    let { name, value } = target;
    const members = formData.members.map((item, idx) => {
      if (idx == member - 1) {
        item = { ...item, [name]: value };
      }
      return item;
    });
    setFormData({ ...formData, members });
  };
  const validateTeamMember = () => {
    const data = validateTeamMemberError(formData, member);
    if (data.error) {
      setError({ ...error, [data.name]: data.message });
    } else {
      setError(initialMember);
    }
    return !data.error;
  };

  return (
    <>
      <div className="register">
        <div className="register-ovaldesign"></div>
        <div className="register-top">
          <h2 className="register-heading">Registration Form</h2>
          <div className="register-para">
            Its recommended to have 5 members it will inrease your chances of
            winning
          </div>
        </div>
        {tab == 0 ? (
          <div className="register-main">
            <div className="register-main-inputs">
              <div className="register-input-div">
                <label
                  htmlFor={formInputs[0][0].name}
                  className="register-input-label"
                >
                  {formInputs[0][0].label}
                </label>
                <input
                  type={formInputs[0][0].type}
                  name={formInputs[0][0].name}
                  id={formInputs[0][0].name}
                  placeholder={formInputs[0][0].placeholder}
                  value={formData.team}
                  className="register-input-input"
                  onChange={handleChange}
                />
              </div>
              <div className="register-input-div">
                <label
                  htmlFor={formInputs[0][1].name}
                  className="register-input-label"
                >
                  {formInputs[0][1].label}
                </label>
                <select
                  name={formInputs[0][1].name}
                  id={formInputs[0][1].name}
                  onChange={handleChange}
                  className="register-input-input"
                  defaultValue={"0"}
                >
                  <option value="0" disabled>
                    Team Members limits 3-5
                  </option>
                  <option value="3">3 Members</option>
                  <option value="4">4 Members</option>
                  <option value="5">5 Members</option>
                </select>
              </div>
            </div>
            <button
              className={`register-next ${
                (!formData.team || !formData["no-of-member"]) && "disabled"
              }`}
              disabled={!formData.team || !formData["no-of-member"]}
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  members: Array(formData["no-of-member"]).fill(initialMember),
                }));
                setTab(1);
              }}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="register-main">
            <div className="register-main-inputs">
              {formInputs[tab].map((item, idx) => (
                <div className="register-input-div" key={idx}>
                  <label htmlFor={item.name} className="register-input-label">
                    {item.label}
                  </label>
                  <div className="w-full">
                    <input
                      type={item.type}
                      name={item.name}
                      id={item.name}
                      placeholder={item.placeholder}
                      value={formData.members[member - 1][item.name]}
                      className="register-input-input"
                      onChange={handleChangeMember}
                    />
                    {error[item.name] && (
                      <p className="register-input-error">{error[item.name]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="register-main-bottom">
              <button
                className="register-next"
                onClick={() => {
                  if (member == 1) {
                    setTab(0);
                  } else {
                    setMember(member - 1);
                  }
                }}
              >
                Prev
              </button>
              {member < formData["no-of-member"] ? (
                <button
                  className="register-next"
                  onClick={() => {
                    if (validateTeamMember()) {
                      setMember(member + 1);
                    }
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  className="register-next"
                  onClick={() => {
                    localStorage.setItem("data", JSON.stringify(formData));
                    navigate("/join-group");
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RegistrationForm;
