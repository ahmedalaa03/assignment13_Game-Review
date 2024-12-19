import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
  constructor() {
    this.getData("mmorpg");
    document.querySelectorAll(".menu a").forEach((category) => {
      category.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getData(e.target.dataset.category);
      });
    });
  }

  async getData(category) {
    document.querySelector(".loading").classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    const response = await api.json();
    new Ui().displayData(response);
    this.addClicktEvent();
    document.querySelector(".loading").classList.add("d-none");
  }
  addClicktEvent() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        new Details().getDetails(item.getAttribute('data-id'));
      });
    });
  }
}
