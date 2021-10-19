import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {name, teamImageUrl, id} = team
  return (
    <Link to={`/team-matches/:${id}`} className="linkClass">
      <li className="teamCardBox">
        <img src={teamImageUrl} alt={`${name}`} className="teamImg" />
        <h1 className="teamName">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
