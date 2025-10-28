import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const count = parseInt(req.query.count) || 10;

  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${count}`
    );

    const users = formattedUsers(response.data.results);

    // res.json(response.data);
    res.json(users);
  } catch (err) {
    console.error("Unexpected error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

const formattedUsers = (users) => {
  return users.map((user) => ({
    name: user.name.first + " " + user.name.last,
    gender: user.gender.toUpperCase(),
    location: user.location.city,
    email: user.email,
    birthdate: user.dob.date.substring(0, 10),
    photo: user.picture.large,
  }));
};

export default router;
