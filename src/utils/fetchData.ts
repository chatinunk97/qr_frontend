import axios from "axios";
import { type formData } from "../types/loginTypes";

const fetchData = async (input: formData) => {
  console.log(`The following is the input sending to API for login `);
  console.log(input);
  return await axios.get("../../mock/testFile.json");
};

export default fetchData;
