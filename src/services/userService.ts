import User from "./../models/userModel";

const getAllUser = async () => {
  return await User.find().exec();
};
const getUserById = async (id: string) => {
  return await User.findById(id);
};

const getUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

const getUserByMobile = async (mobileNumber: string) => {
  return await User.findOne({ mobileNumber });
};

export default {
  getAllUser,
  getUserById,
  getUserByEmail,
  getUserByMobile,
};
