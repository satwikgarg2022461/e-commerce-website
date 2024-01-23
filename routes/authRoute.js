import  express  from "express";
import {loginController, registerController} from "../controllers/authController.js"


// router object
const router = express.Router();

// routing
// register || Method Post
router.post('/register', registerController);

// LOGIN || POST
router.post("/login",loginController)


export default router;