import {Component} from 'react'

import HistoryItem from '../HistoryItem/index'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class GoogleHistory extends Component {
  state = {searchIp: '', historyList: initialHistoryList}

  onDelete = uniqueId => {
    const {historyList} = this.state
    const filteredList = historyList.filter(
      eachItem => eachItem.id !== uniqueId,
    )
    this.setState({historyList: filteredList})
  }

  onType = event => {
    this.setState({searchIp: event.target.value})
  }

  render() {
    const {historyList} = this.state
    const {searchIp} = this.state
    const filteredList = historyList.filter(eachItem => {
      const input = searchIp
      return eachItem.title.toLowerCase().includes(input.toLowerCase())
    })

    return (
      <div className="main-container">
        <div className="navbar">
          <img
            className="navbar-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-bar">
            <div className="search-logo-container">
              <img
                placeholder="search history"
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              value={searchIp}
              onChange={this.onType}
              type="Search"
              className="search-input"
            />
          </div>
        </div>
        <div className="history-container">
          <div className="card">
            <ul className="list=container">
              {filteredList.length === 0 ? (
                <p className="no-history-heading">
                  There is no history to show
                </p>
              ) : (
                filteredList.map(eachItem => (
                  <HistoryItem
                    element={eachItem}
                    key={eachItem.id}
                    uniqueId={eachItem.id}
                    onDelete={this.onDelete}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleHistory
