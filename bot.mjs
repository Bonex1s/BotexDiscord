import { Client, GatewayIntentBits } from "discord.js";
import { config } from "./config.mjs";
import { position } from "./variables.mjs";
import { elements, getRandomInt, pageLoad } from "./appFunctions.mjs";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = config.token;

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
  if (interaction.commandName === "winrate") {
    const { winr } = await elements(
      "https://www.leagueofgraphs.com/summoner/euw/KH%20Bonex-12158"
    );
    await interaction.reply(`"Процент побед KH Bonex равен:  ${winr}"`);
  }
  if (interaction.commandName === "statsyordle") {
    const { win, lose, winr, games } = await elements(
      "https://www.leagueofgraphs.com/summoner/euw/KH+HappyYordle-EUW"
    );

    await interaction.reply(
      `KH HappyYordle: ${win} побед и ${lose} поражений\nВинрейт: ${winr}\nВсего игр solo/duo: ${games}`
    );
  }
  if (interaction.commandName === "statsbonex") {
    const { win, lose, winr, games } = await elements(
      "https://www.leagueofgraphs.com/summoner/euw/KH%20Bonex-12158"
    );

    await interaction.reply(
      `KH Bonex: ${win} побед и ${lose} поражений\nВинрейт: ${winr}\nВсего игр solo/duo: ${games}`
    );
  }
});

client.login(token);
