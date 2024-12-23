const fileColl = require("../models/file.model");
const fs = require("fs");

const createFile = async (req, res) => {
  try {
    //multer will automatically inject the file into req.file
    let file = req.file;
    let userId = req.userId;
    let data = {
      ...file,
      userId,
    };
    let fileData = await fileColl.create(data);
    res.json({
      fileData,
      message: "file uploaded",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getfile = async (req, res) => {
  try {
    let userId = req.userId;
    let getData = await fileColl.find({ userId });
    if (!getData || getData.length === 0) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json(getData);
  } catch (error) {
    res.json(error.message);
  }
};

const getFileId = async (req, res) => {
  try {
    let { _id } = req.query;
    let getData = await fileColl.findById(_id);
    if (!getData) {
      return res.status(404).json({ message: "Data Not Found" });
    }
    res.json({ getData });
  } catch (error) {
    res.json(error.message);
  }
};
const editfile = async (req, res) => {
  try {
    let { _id } = req.query;
    let newfile = req.file;
    let findOldFile = await fileColl.findById(_id);
    if (!findOldFile) {
      return res.status(404).json({ message: "File Not Found" });
    }
    fs.unlinkSync(`${findOldFile.destination}${findOldFile.filename}`);
    let update = await fileColl.findByIdAndUpdate(_id, newfile, { new: true });
    res.json(update)
  } catch (error) {
    res.json(error.message)
  }
};

const deleteFile = async(req,res) =>{
    try {
        let {_id} = req.query
        let deleteFile = await fileColl.findById(_id)
        if(!deleteFile){
            return res.satus(404).json({message:"Data not found"})
        }
        fs.unlinkSync(`${deleteFile.destination}${deleteFile.filename}`)
        await deleteFile.deleteOne()
        res.json({message:"file deleted successfully"})
    } catch (error) {
        res.json(error.message)
    }

}
module.exports = {
  createFile,
  getfile,
  getFileId,
  editfile,
  deleteFile
};
