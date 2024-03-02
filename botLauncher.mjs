import { REST, Routes } from "discord.js";
import { config } from "./config.mjs";
import { commands } from "./commands.mjs";

const clientId = "1204613780554911814";
const token = config.token;

const rest = new REST({ version: "10" }).setToken(token);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(clientId), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
