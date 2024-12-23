const { get } = require("mongoose");
const product = require("../models/product.model");

const postProduct = async (req, res) => {
  try {
    let userId = req.userId;
    let data = {
      ...req.body,
      userId,
    };
    const prodData = await product.create(data);
    res.json({
      prodData,
    });
  } catch (error) {
    res.json({ Error: error });
  }
};

const findData = async (req, res) => {
  try {
    let userId = req.userId;
    const checkData = await product.find({ userId });
    if (!checkData || checkData.length === 0) {
      return res.status(404).json({
        message: "not found user",
      });
    }
    res.json({
      checkData,
    });
  } catch (error) {
    res.json({ Error: error });
  }
};

const findDataByQuery = async (req, res) => {
  try {
    let { productId } = req.query;

    const getData = await product.findOne({ productId });
    if (!getData) {
      return res.status(404).json({
        message: "productId not found",
      });
    }
    res.json({
      getData,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getFindById = async (req, res) => {
  try {
    let { _id } = req.query;
    let find = await product.findById(_id);
    if (!find) {
      res.status(404).json({ message: "Product with id not found" });
    }
    res.json({
      find,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const updatebyid = async (req, res) => {
  try {
    let { _id } = req.query;
    let update = await product.findByIdAndUpdate(_id, req.body, { new: true });
    if (!update) {
      res.status(404).json({ message: "Product with id not found" });
    }
    res.json({
      update,
    });
  } catch (error) {
    res.json(error.message);
  }
};


const updateone = async (req, res) => {
  try {
    let { _id } = req.query;
    let update = await product.updateOne(_id, req.body, { new: true });
    if (!update) {
      res.status(404).json({ message: "Product with id not found" });
    }
    res.json({
      update,
    });
  } catch (error) {
    res.json(error.message);
  }
};

//update all using userid since it is the common data in all data
const updateall = async (req, res) => {
  try {
    let userId = req.userId;
    let update = await product.updateMany({userId}, req.body);
    if (!update) {
      res.status(404).json({ message: "user id not found" });
    }
    let data = await product.find({userId})
    res.json({
      data,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deleteid = async(req,res) => {
  try {
    let {_id} = req.query
    let data = await product.findByIdAndDelete(_id)
    if(!data){
      res.status(404).json({ message: "id not found" });
    }
    res.json(data)
  } catch (error) {
    res.json(error.message)
    
  }

}

const deleteoneid = async(req,res)=> {
  try {
    let {_id} = req.query
    let dat1 = await product.find({_id})
    if(!dat1){
      res.status(404).json({ message: "id not found" });
    }
    let data = await product.deleteOne({_id})
    res.json(dat1)
  } catch (error) {
    res.json(error.message)
  }
}
const deleteall = async(req,res)=> {
  try {
    let userId = req.query
    let dat1 = await product.find({userId})
    if(!dat1){
      res.status(404).json({ message: "id not found" });
    }
    let data = await product.deleteMany({userId})
    res.json(dat1)
  } catch (error) {
    res.json(error.message)
  }
}




module.exports = {
  postProduct,
  findData,
  findDataByQuery,
  getFindById,
  updatebyid,
  updateall,
  deleteid,
  deleteoneid,
  deleteall
};
