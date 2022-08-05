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


const multiImage = async (req, res) => {
  const storeImags=await req.files
  const paylodArray=storeImags.map((item)=>{
    return {
      name:item.originalname,
      path:item.path ,
      type:item.mimetype
    }
  })

  try {
    const userData = {
      imageData:JSON.stringify(paylodArray),
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    };
    const user = await UserImageUpload.create(userData);

    res.status(201).json({ userData });
  } catch (err) {
    return res.status(500).json("Something Went Wrong");
  }
};
module.exports = { userProfile,multiImage };
