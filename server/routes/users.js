import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read only

router.get("/:id", verifyToken, getUser); // getting user ID comming from fornt-end
router.get("/:id/friends", verifyToken, getUserFriends);

// Upadte

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
