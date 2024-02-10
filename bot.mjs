import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token =
  "MTIwNDYxMzc4MDU1NDkxMTgxNA.GwaKg2.D3HsspX9WRD7Paz3sj56fIFVm6DMMuEKUDmvv0";

const position = {
  key1: "на топе",
  key2: "на миде",
  key3: "в лесу",
  key4: "на адк",
  key5: "на саппорте",
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "random") {
    const min = 1;
    const max = 100;
    const randomInt = getRandomInt(min, max);
    console.log("Случайное число:", randomInt);
    await interaction.reply(randomInt.toString() + " Витька из 100");
  }
  if (interaction.commandName === "teemo") {
    await interaction.reply("Шанс того что teemo кусока говна, равен 100%!");
  }
  if (interaction.commandName === "position") {
    function randomPosition(position) {
      const keys = Object.keys(position);
      const randomIndex = Math.floor(Math.random() * keys.length);
      return position[keys[randomIndex]];
    }
    await interaction.reply("Играем" + " " + randomPosition(position));
  }
});

client.login(token);
