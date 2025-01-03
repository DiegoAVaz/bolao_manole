const betsList = document.getElementById("bets-list");
const searchInput = document.getElementById("search-input");

const bets = [
  [6, 8, 15, 17, 26, 30, 45],
  [1, 22, 31, 34, 42, 44, 53],
  [12, 26, 41, 52, 54, 55, 60],
  [2, 15, 17, 21, 25, 28, 31],
  [4, 6, 9, 15, 18, 30, 35],
  [3, 4, 13, 15, 21, 32, 48],
  [23, 26, 29, 37, 44, 47, 58],
  [4, 13, 20, 22, 25, 48, 49],
  [3, 5, 9, 11, 23, 37, 44],
  [10, 12, 14, 22, 23, 26, 35],
  [2, 3, 15, 18, 41, 48, 49],
  [14, 16, 25, 29, 37, 53, 54],
  [3, 5, 14, 33, 34, 40],
  [6, 13, 17, 35, 40, 57],
  [11, 12, 24, 26, 28, 58],
  [12, 20, 36, 41, 47, 54],
  [9, 16, 19, 28, 35, 40],
  [1, 10, 12, 18, 33, 52],
  [6, 17, 20, 23, 34, 59],
  [15, 16, 21, 37, 56, 59],
  [2, 12, 35, 52, 53, 54],
  [6, 9, 10, 22, 33, 50],
  [18, 20, 22, 26, 38, 52],
  [5, 38, 44, 45, 57, 58],
  [2, 7, 46, 49, 52, 53],
  [9, 12, 16, 33, 42, 48],
  [5, 8, 20, 24, 29, 47],
  [1, 6, 14, 15, 35, 47],
  [4, 12, 25, 51, 53, 55],
  [10, 13, 17, 28, 39, 40],
  [4, 6, 17, 20, 31, 32],
  [15, 19, 22, 25, 43, 48],
  [10, 14, 27, 35, 53, 60],
  [17, 18, 24, 39, 58, 60],
  [1, 9, 15, 23, 40, 57],
  [6, 7, 12, 26, 37, 42],
  [21, 31, 47, 49, 52, 60],
  [13, 43, 44, 55, 57, 58],
  [30, 45, 49, 55, 57, 58],
  [1, 13, 14, 23, 25, 36],
  [2, 9, 13, 28, 41, 50],
  [8, 9, 20, 25, 33, 52],
  [18, 19, 40, 42, 49, 57],
  [18, 19, 28, 30, 32, 49],
  [8, 18, 20, 21, 39, 40],
  [8, 16, 28, 32, 46, 58],
  [2, 15, 16, 28, 30, 31],
  [2, 9, 13, 17, 24, 25],
  [6, 17, 34, 48, 49, 56],
  [7, 35, 43, 52, 55, 59],
  [14, 21, 31, 32, 42, 52],
  [1, 11, 18, 33, 44, 57],
  [1, 9, 22, 25, 48, 49],
  [2, 6, 7, 16, 31, 33],
  [22, 37, 39, 43, 50, 51],
  [6, 9, 27, 37, 45, 46],
  [17, 18, 36, 41, 43, 57],
  [5, 21, 24, 31, 34, 44],
  [2, 5, 10, 26, 49, 51],
  [2, 16, 29, 38, 51, 59],
  [15, 16, 23, 47, 55, 56],
  [7, 9, 10, 19, 32, 33],
  [8, 28, 32, 42, 45, 54],
  [20, 41, 45, 49, 54, 56],
  [1, 7, 8, 32, 37, 50],
  [15, 22, 32, 52, 53, 55],
  [23, 29, 31, 43, 48, 56],
  [1, 3, 12, 35, 48, 56],
  [3, 27, 36, 45, 46, 55],
  [5, 19, 44, 53, 56, 58],
  [1, 13, 37, 48, 53, 54],
  [6, 12, 40, 46, 49, 55],
  [5, 14, 19, 26, 33, 42, 48, 53],
  [7, 13, 22, 28, 35, 44, 49, 54],
  [3, 12, 17, 23, 32, 38, 41, 56],
  [3, 5, 14, 33, 34, 40],
  [6, 13, 17, 35, 40, 57],
  [11, 12, 24, 26, 28, 58],
  [12, 20, 36, 41, 47, 54],
  [9, 16, 19, 28, 35, 40],
  [1, 10, 12, 18, 33, 52],
  [6, 17, 20, 23, 34, 59],
  [15, 16, 21, 37, 56, 59],
  [2, 12, 35, 52, 53, 54],
  [6, 9, 10, 22, 33, 50],
  [18, 20, 22, 26, 38, 52],
  [5, 38, 44, 45, 57, 58],
  [2, 7, 46, 49, 52, 53],
  [9, 12, 16, 33, 42, 48],
  [5, 8, 20, 24, 29, 47],
  [1, 6, 14, 15, 35, 47],
  [4, 12, 25, 51, 53, 55],
  [10, 13, 17, 28, 39, 40],
  [4, 6, 17, 20, 31, 32],
  [15, 19, 22, 25, 43, 48],
  [10, 14, 27, 35, 53, 60],
  [17, 18, 24, 39, 58, 60],
  [1, 9, 15, 23, 40, 57],
  [6, 7, 12, 26, 37, 42],
  [21, 31, 47, 49, 52, 60],
  [13, 43, 44, 55, 57, 58],
  [30, 45, 49, 55, 57, 58],
  [1, 13, 14, 23, 25, 36],
  [2, 9, 13, 28, 41, 50],
  [8, 9, 20, 25, 33, 52],
  [18, 19, 40, 42, 49, 57],
  [18, 19, 28, 30, 32, 49],
  [8, 18, 20, 21, 39, 40],
  [8, 16, 28, 32, 46, 58],
  [2, 15, 16, 28, 30, 31],
  [2, 9, 13, 17, 24, 25],
  [6, 17, 34, 48, 49, 56],
  [7, 35, 43, 52, 55, 59],
  [14, 21, 31, 32, 42, 52],
  [1, 11, 18, 33, 44, 57],
  [1, 9, 22, 25, 48, 49],
  [2, 6, 7, 16, 31, 33],
  [22, 37, 39, 43, 50, 51],
  [6, 9, 27, 37, 45, 46],
  [17, 18, 36, 41, 43, 57],
  [5, 21, 24, 31, 34, 44],
  [2, 5, 10, 26, 49, 51],
  [2, 16, 29, 38, 51, 59],
  [15, 16, 23, 47, 55, 56],
  [7, 9, 10, 19, 32, 33],
  [8, 28, 32, 42, 45, 54],
  [2, 16, 29, 38, 51, 59],
  [20, 41, 45, 49, 54, 56],
  [1, 7, 8, 32, 37, 50],
  [15, 22, 32, 52, 53, 55],
];

const uniqueBets = Array.from(new Set(bets.map(JSON.stringify))).map(
  JSON.parse
);

function renderBets(sortedBets, highlightedNumbers) {
  betsList.innerHTML = "";
  sortedBets.forEach(({ bet, matches }) => {
    const betItem = document.createElement("li");
    betItem.innerHTML = bet
      .map((num) =>
        highlightedNumbers.has(num)
          ? `<span style="color: #00c853;">${num}</span>`
          : `<span style="color:rgb(249, 114, 114);">${num}</span>`
      )
      .join(" ");
    betItem.setAttribute("data-matches", matches);
    betsList.appendChild(betItem);
  });
}

function filterAndSortBets() {
  const inputNumbers = searchInput.value
    .split(" ")
    .map(Number)
    .filter((n) => !isNaN(n));
  const highlightedNumbers = new Set(inputNumbers);

  const sortedBets = uniqueBets
    .map((bet) => {
      const matches = bet.filter((num) => highlightedNumbers.has(num)).length;
      return { bet, matches };
    })
    .sort((a, b) => b.matches - a.matches);

  renderBets(sortedBets, highlightedNumbers);
}

searchInput.addEventListener("input", filterAndSortBets);

renderBets(
  uniqueBets.map((bet) => ({ bet, matches: 0 })),
  new Set()
);
