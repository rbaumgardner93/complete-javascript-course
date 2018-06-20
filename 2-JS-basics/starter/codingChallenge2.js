/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

const johnScores = [89, 120, 103];

const mikeScores = [116, 94, 123];

const maryScores = [97, 134, 105];

const johnAvgScore = johnScores.reduce((acc, curr) => {
  return acc + curr / johnScores.length;
}, 0);
console.log('John: ' + johnAvgScore.toFixed(2));

const mikeAvgScore = mikeScores.reduce((acc, curr) => {
  return acc + curr / mikeScores.length;
}, 0);

console.log('Mike: ' + mikeAvgScore.toFixed(2));

const maryAvgScore = maryScores.reduce((acc, curr) => {
  return acc + curr / maryScores.length;
}, 0);

console.log('Mary: ' + maryAvgScore.toFixed(2));

const winner = (scoreJohn, scoreMike, scoreMary) => {
  if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log(
      `John's team score of ${johnAvgScore} would beat Mikes team score of ${mikeAvgScore} and Mary's team score of ${maryAvgScore}`
    );
  } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log(
      `Mike's team score of ${mikeAvgScore} would beat John's team score of ${johnAvgScore} and Mary's team score of ${maryAvgScore}`
    );
  } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log(
      `Mary's team score of ${maryAvgScore} would beat John's team score of ${johnAvgScore} and Mike's team score of ${mikeAvgScore}`
    );
  } else {
    console.log(
      `Mike's team score of ${mikeAvgScore} and John's team score of ${johnAvgScore} are equal and would result in a tie`
    );
  }
};

winner(johnAvgScore, mikeAvgScore, maryAvgScore);
