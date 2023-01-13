// Write your code here

import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <div className="match-details-section">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="latest-match-text-section">
        <p className="question">FirstInnings</p>
        <p className="answer">{firstInnings}</p>
        <p className="question">SecondInnings</p>
        <p className="answer">{secondInnings}</p>
        <p className="question">Man Of the Match</p>
        <p className="answer">{manOfTheMatch}</p>
        <p className="question">Umpires</p>
        <p className="answer">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
