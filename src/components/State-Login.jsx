import { useState } from "react";
import Input from "./Input";
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
  const passwordIsInvalid = didEdit.password && userData.password.trim().length < 6;

  const handleInputBlur = (event) => {
    setDidEdit((prevDidEdit) => ({
      ...prevDidEdit,
      [event.target.name]: true,
    }));
  };
  function handleSubmit(event) {
    event.preventDefault();
    if (!emailIsInvalid && !passwordIsInvalid) {
      setUserData(initialState);
      setDidEdit({ email: false, password: false });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={emailIsInvalid && "Please enter a valid email."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={passwordIsInvalid && "Please enter a valid password."}
        />
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
