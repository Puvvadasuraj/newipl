import './index.css'
import {Component} from 'react'

class Home extends Component {
  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formatedData = data.map()
  }

  render() {
    return (
      <>
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
            className="headImg"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
      </>
    )
  }
}

export default Home
