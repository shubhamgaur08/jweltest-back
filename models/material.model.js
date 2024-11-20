const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Material = mongoose.model("Material", materialSchema);

module.exports = Material