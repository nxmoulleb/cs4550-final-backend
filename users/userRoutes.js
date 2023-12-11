import * as dao from "./userDao.js";
function UserRoutes(app) {
  const deleteUser = async (req, res) => {};
  const findAllUsers = async (req, res) => {
    const status = await dao.findAllUsers();
    res.json(status)
  };
  const findUserById = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.findUserById(userId);
    res.json(status);
  };
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body)
    const currentUser = await dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(status)
  };
  const register = async (req, res) => {
    const userUserName = await dao.findUserByUsername(req.body.username);
    const userEmail = await dao.findUserByEmail(req.body.email);
    if (userUserName) {
      res.status(400).json({ message: "Username already taken" });
      return
    }
    if (userEmail) {
      res.status(400).json({ message: "Email already taken" });
      return
    }
    const currentUser = await dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res
        .status(400)
        .json({ message: "Username and password combination do not exist" });
    }
  };
  const signout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };
  const account = async (req, res) => {
    res.json(req.session["currentUser"]);
  };
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/register", register);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default UserRoutes;
