const professionalData = require("../user.json");

const getProfessionalData = (req, res) => {
  res.json(professionalData[0]);
  console.log("Data sent successfully:", professionalData);
};

module.exports = {
  getProfessionalData,
};
