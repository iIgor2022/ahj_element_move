export default class App {
  constructor(boardsize) {
    this.activeHole = 1;
    this.goblin = document.createElement("div");
    this.goblin.classList.add("goblin");
    this.createGrid(boardsize);
    document.createElement("body").appendChild(this.createBadge());
  }

  createGrid(boardsize) {
    const container = document.querySelector(".container");
    for (let index = 0; index < Math.pow(boardsize, 2); index++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      container.appendChild(hole);
    }
  }

  createBadge() {
    const img = document.createElement("img");
    img.setAttribute("alt", "GitHub Workflow Status (with event)");
    img.setAttribute(
      "src",
      "https://img.shields.io/github/actions/workflow/status/iIgor2022/ahj_element_move/web.yml"
    );
    return img;
  }

  gamePlay() {
    const cells = document.querySelectorAll(".hole");
    setInterval(() => {
      const cell = cells[Math.floor(Math.random() * cells.length)];
      cell.insertAdjacentElement("afterbegin", this.goblin);
    }, 1000);
  }
}
