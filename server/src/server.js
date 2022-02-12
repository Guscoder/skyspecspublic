const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const PORT = 3010;

const app = express();
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Welcome to SkySpecs!");
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
