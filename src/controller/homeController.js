const getHome = (req, res) => {
  res.send("YOU ARE AT HOME PAGE");
};

const homeController = { getHome };
module.exports = homeController;
