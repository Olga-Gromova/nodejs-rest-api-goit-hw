const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { userJoiSchema, userSubscriptionSchema } = require("../../models/user");

const router = express.Router();

const ctrl = require("../../controllers/users");

router.post("/register", validateBody(userJoiSchema), ctrl.register);

router.post("/login", validateBody(userJoiSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(userSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
