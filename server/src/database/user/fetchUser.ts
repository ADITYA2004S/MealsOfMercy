import UserModel from "../../models/UserModel";

const fetchUser = async (email: string) => {
  const dbOrganizer = await UserModel.findOne({ email });

  if (!dbOrganizer) {
    throw new Error("User With Given Email Address Does Not Exist");
  }

  return dbOrganizer;
};

export default fetchUser;
