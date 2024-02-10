import { REST, Routes } from "discord.js";

const clientId = "1204613780554911814";
const token =
  "MTIwNDYxMzc4MDU1NDkxMTgxNA.GwaKg2.D3HsspX9WRD7Paz3sj56fIFVm6DMMuEKUDmvv0";
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
];

const rest = new REST({ version: "10" }).setToken(token);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(clientId), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
