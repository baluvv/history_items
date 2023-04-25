import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryItems extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props

    const filteredHistory = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search"
              alt="search"
            />
          </div>
          <input
            type="search"
            className="input-container"
            onChange={this.onChangeSearchInput}
          />
        </div>
        <ul className="list-container">
          {filteredHistory.map(eachHistory => (
            <HistoryItem historyDetails={eachHistory} key={eachHistory.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryItems
