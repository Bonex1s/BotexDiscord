import { readFileSync } from "fs";

const rawdata = readFileSync("config.json", "utf-8");
const config = JSON.parse(rawdata);

export { config };
