// const professionalData = require("../user.json");
const mongodb = require("../db/connect.js");

const getProfessionalData = async (req, res) => {
  const result = await mongodb.getDb().db().collection("user").find({});
  result.toArray().then((data) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data[0]);
  });
  console.log("Data sent successfully:", professionalData);
};

module.exports = {
  getProfessionalData,
};
