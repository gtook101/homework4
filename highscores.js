const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

//<form id="newForm">
  //Score Name<input type="text" name="name"></input>
  //Scores<input type="text" name="scores"></input>
  //<input type="button" onclick="newFunction()" value="Reset"></input>
//</form>