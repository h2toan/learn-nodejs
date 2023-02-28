import { stdin } from "node:process";

stdin.on("data", (data) => {
  console.log(`You typed ${data}`);
});
