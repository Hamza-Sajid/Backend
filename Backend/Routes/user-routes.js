import Express from "express";
import profileUser from "../Controllers/profile_user.js";
import login from "../Controllers/signin-controller.js";
import updateToken from "../Controllers/updateToken.js";
import signup from "../Controllers/user-controller.js";
import verifyUser from "../Controllers/verifyUser.js";


const router = Express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.get("/profile", verifyUser)
// router.get("/refresh", updateToken, verifyUser)


export default router;
