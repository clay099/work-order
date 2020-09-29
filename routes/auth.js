const express = require("express");
const ExpressError = require("../helpers/expressError");
const User = require("../models/userModel");
const Tradesman = require("../models/tradesmanModel");

const router = new express.Router();

router.post("/login/user", async (req, res, next) => {
	try {
		let { password, email } = req.body;
		let user = await User.getAll(email);
		let token = await user.authenticate(password);
		return res.json({ token });
	} catch (e) {
		return next(e);
	}
});

router.post("/login/tradesmen", async (req, res, next) => {
	try {
		let { password, email } = req.body;
		let user = await Tradesman.getAll(email);
		let token = await user.authenticate(password);
		return res.json({ token });
	} catch (e) {
		return next(e);
	}
});

module.exports = router;
