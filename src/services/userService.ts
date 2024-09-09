import User from "./../models/userModel";

const getAllUser = async () => {
  return await User.find().exec();
};
const getUserById = async (id: string) => {
  return await User.findById(id);
};

export default { getAllUser, getUserById };
