import { connectDb } from "@/utils/connectDb";
import Property from "@/models/Property";

export async function GET(request) {
  try {
    await connectDb();
    const allProperties = await Property.find();
    return Response.json({
      status: "success",
      data: allProperties,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: error.message,
    });
  }
}
