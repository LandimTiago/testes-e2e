import Server from "./server.js";

const server = Server.listen(3000).on("listening", () => {
  console.log(`Running at port ${server.address().port}`);
});
