// plants.js
import { loadCategoryItems, renderKeyboard, showItem } from "./category-template.js";

const lang = localStorage.getItem("language") || "en";
const category = "plants";
let data = [];

async function init() {
  data = await loadCategoryItems(category, lang);
  renderKeyboard(data, lang, handleClick);
}

function handleClick(letter) {
  const match = data.find(item => item.letter[lang] === letter);
  if (match) showItem(match, lang, category);
}

init();
