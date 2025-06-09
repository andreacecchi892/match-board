document.addEventListener('DOMContentLoaded', () => {
  const homeScoreContainer = document.querySelector('.home .team-score')
  const awayScoreContainer = document.querySelector('.away .team-score')

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

  homeBtn.addEventListener('click', () => handleScoreClick('home'));
  awayBtn.addEventListener('click', () => handleScoreClick('away'));
});