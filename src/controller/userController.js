const getInfor = (req, res) => {
  return res.send({ name: "example", email: "example@example.com" });
};

const userController = {
  getInfor,
};
module.exports = userController;
