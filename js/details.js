import { Ui } from "./ui.js";

export class Details {
   constructor() {
      document.getElementById("btnClose").addEventListener("click", () => {
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });
   }
   async getDetails(gameId) {
      document.querySelector(".games").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
      document.querySelector(".loading").classList.remove("d-none");
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
         }
      };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
      const response = await api.json();
      new Ui().displayDetails(response);
      document.querySelector(".loading").classList.add("d-none");
   }
}
