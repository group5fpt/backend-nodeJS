import express from "express"

const route = express.Router();

route.get("/", (req, res, next) => {
  const object = { name: "Nguyen Quoc Phu", age: 22, job: "Software Engineer" };
  res.send(object);
});

route.post("/", (req, res, next) => {
  const body = req.body;
  console.log(body);
});

export { route };
