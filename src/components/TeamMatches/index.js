import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: [], value: ''}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    console.log(response)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      umpires: data.umpires,
    }

    this.setState({teamDetails: updatedData})
  }

  render() {
    const {teamDetails} = this.state
    const {umpires, teamBannerUrl} = teamDetails
    return (
      <div>
        <h1>hello</h1>
        <p>{umpires}</p>
        <p>{teamBannerUrl}</p>
      </div>
    )
  }
}

export default TeamMatches
