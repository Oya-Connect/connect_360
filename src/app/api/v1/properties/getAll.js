import { connectDb } from "@/utils/connectDb";
import Property from "@/models/Property";

const getAllProperties = async (req, res) => {
  try {
    await connectDb();
    const allProperties = await Property.find();
    return res.status(200).json({
      status: "success",
      data: allProperties,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export default getAllProperties;
