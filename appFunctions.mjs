import fetch from "node-fetch";
import cheerio from "cheerio";

async function pageLoad(url) {
  const res = await fetch(url);
  const data = await res.text();
  return data;
}

async function elements(url) {
  const pageData = await pageLoad(url);
  const $ = cheerio.load(pageData);
  const winsElement = $(".winslosses .wins .winsNumber");
  const lossesElement = $(".winslosses .losses .lossesNumber");
  const winrElement = $(".pie-chart-container #graphDD6");
  const gamesElement = $(".pie-chart-container #graphDD5");

  const win = winsElement.text().trim();
  const lose = lossesElement.text().trim();
  const winr = winrElement.text().trim();
  const games = gamesElement.text().trim();

  return { win, lose, winr, games };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { pageLoad, elements, getRandomInt };
