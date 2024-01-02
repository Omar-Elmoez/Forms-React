import { useState } from "react";
const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [userData, setUserData] = useState(initialState);
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [name]: false }));
  }

  // Validation
  const emailIsInvalid = didEdit.email && !userData.email.includes("@");

  const handleInputBlur = (event) => {
    setDidEdit((prevDidEdit) => ({ ...prevDidEdit, [event.target.name]: true }));
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    setUserData(initialState);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
