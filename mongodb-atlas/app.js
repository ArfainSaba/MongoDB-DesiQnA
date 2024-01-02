const mongoose = require("mongoose");

const app = require("express")();
const PORT = 3003;
const http = require("http").Server(app);
const User = require("./models/user");

mongoose.connect(
  "mongodb+srv://arfainsabasaba:y0L7g9REzNMyAch3@cluster0.zbkieg0.mongodb.net/?retryWrites=true&w=majority"
);

async function insert() {
  User.create({
    name: "Arfain",
    email: "kr@gmail.com",
  });
}

insert();

http.listen(3003, function () {
  console.log(`server running on port ${PORT}`);
});
