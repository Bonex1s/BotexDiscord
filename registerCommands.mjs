import { REST, Routes } from "discord.js";
import { config } from "./config.mjs";

const clientId = "1204613780554911814";
const token = config.token;

const commands = [
  {
    name: "random",
    description: "Random number!",
  },
  { name: "teemo", description: "bulling!" },
  {
    name: "position",
    description: "Random Lol positon!",
  },
  {
    name: "winrate",
    description: "KH Bonex winrate",
  },
  {
    name: "statsyordle",
    description: "HappyYordle stats win/lose",
  },
  {
    name: "statsbonex",
    description: "Bonex stats win/lose",
  },
];

const rest = new REST({ version: "10" }).setToken(token);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(clientId), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
