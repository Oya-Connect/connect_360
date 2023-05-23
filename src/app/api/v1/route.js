export async function GET(request) {
  try {
    return Response.json({
      status: "success",
      message: "Oya connect 🚀🚀🚀",
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: error.message,
    });
  }
}
