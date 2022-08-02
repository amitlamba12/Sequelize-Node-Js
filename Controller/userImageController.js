const { UserImageUpload } = require("../model/ImageUploadModal");

const userProfile = async (req, res) => {
  const userData = {
    imageData: req.file.path,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
  };

  // console.log('reqBody',userData)
  try {
    const user = await UserImageUpload.create(userData);

    res.status(201).json({ userData });
  } catch (err) {
    return res.status(500).json("Something Went Wrong");
  }
};

module.exports = { userProfile };
