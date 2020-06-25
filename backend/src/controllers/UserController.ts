import Express from "express";

const router = Express.Router();

router.get("/", function (req, res) {
  res.send("Should return user list");
});

router.get("/:id", function (req, res) {
  res.send("Should return user by id");
});

router.put("/", function (req, res) {
  res.send("Should create a new user");
});

router.post("/", function (req, res) {
  res.send("Should update a new user");
});

router.delete("/", function (req, res) {
  res.send("Should delete a new user");
});

export default router;
