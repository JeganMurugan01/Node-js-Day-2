import  express  from "express";
import  userContoler from  ".././controller/user.js";

const router=express.Router()

router.get('/',userContoler)

export default router;