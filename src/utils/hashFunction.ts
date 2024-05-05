import bcrypt from "bcryptjs";

const hashFunction = (input: string) => {
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(input, salt);
};

export default hashFunction;
