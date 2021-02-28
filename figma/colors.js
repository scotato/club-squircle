import fs from "fs";
import styles from "./index.js";

const colors = Object.keys(styles.colors).reduce((acc, colorKey) => {
  const [key, value] = colorKey.split("/");
  if (acc[key]) acc[key][value] = styles.colors[colorKey];
  else acc[key] = { [value]: styles.colors[colorKey] };
  return acc;
}, {});

const json = JSON.stringify(colors, null, 2);

fs.writeFile("./src/colors.json", json, (err) => {
  if (err) throw err;
  console.log("colors saved to src/colors.json");
});
