const index = async (req, res) => {
    try {
      return res.status(200).json({
        status: "success",
        message: "Oya connect 🚀🚀🚀",
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
  
  export default index;
  