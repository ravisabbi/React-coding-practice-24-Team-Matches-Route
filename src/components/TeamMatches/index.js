// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamData: {}}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const matchesData = data.latest_match_details

    const updatedRecentMatchesData = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    const updatedLatestMatchDetails = {
      competingTeam: matchesData.competing_team,
      competingTeamLogo: matchesData.competing_team_logo,
      date: matchesData.date,
      firstInnings: matchesData.first_innings,
      id: matchesData.id,
      manOfTheMatch: matchesData.man_of_the_match,
      matchStatus: matchesData.match_status,
      result: matchesData.result,
      secondInnings: matchesData.second_innings,
      umpires: matchesData.umpires,
      venue: matchesData.venue,
    }

    const updatedTeamData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatchesData,
    }

    this.setState({isLoading: false, teamData: updatedTeamData})
  }

  renderingTeamMatches = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="responsive-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <h1 className="latest-match-heading">Latest Matches</h1>
        <LatestMatch matchDetails={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderingTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
