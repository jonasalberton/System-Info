import Express from "express";
import { User } from "../models/user.model";

const router = Express.Router();

router.get("/", function (req, res) {
  res.send("Should return user list");
});

router.get("/:id", function (req, res) {
    const user: User = {
        id: Number(req.params.id),
        email: 'teste@gmail.com',
        name: 'Jonas'
    }
  res.json(user);
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
