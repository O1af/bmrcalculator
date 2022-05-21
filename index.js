const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const calculateRate = (sex, weight, height, age) => {
	let bmr = 0;
	if (sex == "m") {
		bmr = 66.47 + 6.24 * weight + 12.7 * height - 6.755 * age;
	} else {
		bmr = 655.1 + 6.24 * weight + 4.7 * height - 4.7 * age;
	}
	return bmr;
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.get("/bmr", (req, res) => {
	const sex = req.body.sex;
	const height = req.body.height;
	const weight = req.body.weight;
	const age = req.body.age;
	const result = Math.floor(calculateRate(sex, height, weight, age));
	console.log(calculateRate(sex, height, weight, age));
	res.send("" + result);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
