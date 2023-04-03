const Memory = require("../model/Memory");

const getAllMemories = async (req, res, next) => {
  let memories;
  try {
    memories = await Memory.find();
  } catch (err) {
    console.log(err);
  }

  if (!memories) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ memories });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let memory;
  try {
    memory = await Memory.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!memory) {
    return res.status(404).json({ message: "No Memory found" });
  }
  return res.status(200).json({ memory });
};

const addMemory = async (req, res, next) => {
  const { name, author, description,available,date, image } = req.body;// price, 
  let memory;
  try {
    memory = new Memory({
      name,
      author,
      description,
      date,
      //price,
      //available,
      image,
    });
    await memory.save();
  } catch (err) {
    console.log(err);
  }

  if (!memory) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ memory });
};

const updateMemory = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, available,date, image } = req.body;//price, 
  let memory;
  try {
    memory = await Memory.findByIdAndUpdate(id, {
      name,
      author,
      description,
      date,
      //price,
      //available,
      image,
    });
    memory = await memory.save();
  } catch (err) {
    console.log(err);
  }
  if (!memory) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ memory });
};

const deleteMemory = async (req, res, next) => {
  const id = req.params.id;
  let memory;
  try {
    memory = await Memory.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!memory) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllMemories = getAllMemories;
exports.addMemory = addMemory;
exports.getById = getById;
exports.updateMemory = updateMemory;
exports.deleteMemory = deleteMemory;
