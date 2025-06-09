document.addEventListener('DOMContentLoaded', () => {
  const homeScoreContainer = document.querySelector('.home .team-score');
  const awayScoreContainer = document.querySelector('.away .team-score');
  const reset = document.querySelector('.reset-btn');
  const homeTeamName = document.querySelector('.home .team-name');
  const awayTeamName = document.querySelector('.away .team-name');



  let homeScore = 0; 
  let awayScore = 0;

  const homeBtn = document.querySelector('.home button');
  const awayBtn = document.querySelector('.away button');

  function handleScoreClick(team) {
    if (team === 'home') {
      homeScore++;
      homeScoreContainer.innerHTML = homeScore;
    } else {
      awayScore++;
      awayScoreContainer.innerHTML = awayScore;
    }
  }

  function randTeam(teams) {
    const randomIndex = Math.floor(Math.random() * teams.length);
    return teams[randomIndex];
  }

  homeBtn.addEventListener('click', () => handleScoreClick('home'));
  awayBtn.addEventListener('click', () => handleScoreClick('away'));
  reset.addEventListener('click', () => {
    homeScore = 0;
    awayScore = 0;

    homeScoreContainer.innerHTML = homeScore;
    awayScoreContainer.innerHTML = awayScore;

    homeTeamName.innerHTML = randTeam(teams);
    awayTeamName.innerHTML = randTeam(teams);
  });

  teams = [
    "Real Madrid",
    "FC Barcelona",
    "Manchester United", 
    "Bayern Monaco",
    "Liverpool FC",
    "Juventus FC",
    "AC Milan",
    "Inter",
    "Paris Saint-Germain",
    "Manchester City", 
    "Chelsea FC",
    "Boca Juniors",
    "River Plate",
    "Flamengo",
    "Al-Nassr"
  ]


  homeTeamName.innerHTML = randTeam(teams);
  awayTeamName.innerHTML = randTeam(teams);

});