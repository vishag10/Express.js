import { Router } from "express";
import * as ctrl from "./controller/todo.controller.js";

const router = Router();
router.route("/addtodo").post(ctrl.addTodo);
router.route("/gettodos").get(ctrl.getTodo);
router.route("/iscompleted/:_id").put(ctrl.complete)
router.route("/deletetodo/:_id").delete(ctrl.deleteTodo)
router.route("/update/:_id").put(ctrl.update)
export default router;