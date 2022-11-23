import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/example").then(() => {
  console.log("Connect successfully");
});

const Schema = mongoose.Schema;

const test = Schema({
  name: {
    type: String,
    require: true,
  },
});

const Test = mongoose.model("Test", test);
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());
app.get("/", (request, response) => {
  Test.find({}).then((result) => {
    console.log(result);
  });
  response.end("Test");
});

app.post("/", (request, response) => {
  Test.create(request.body).then(() => {
    response.end("Success");
  });
});
