const dotenv = require("dotenv");
dotenv.config();

require("./app").listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
