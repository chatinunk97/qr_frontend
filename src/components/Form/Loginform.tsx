import { useState } from "react";
import LoginButton from "../Button/LoginButton";
import { type formData } from "../../types/loginTypes";
import hashFunction from "../../utils/hashFunction";
import fetchData from "../../utils/fetchData";

const Loginform = () => {
  const loginStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    border: "solid black",
    padding: 10,
  };

  const [formData, setFormData] = useState<formData>({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const b = await fetchData({
      username: formData.username,
      password: hashFunction(formData.password),
    });
    console.log(b);
  };

  return (
    <form style={loginStyle} onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label>Password:</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <LoginButton />
    </form>
  );
};

export default Loginform;
