import './index.css'

const HistoryItem = props => {
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  return (
    <li className="list-item">
      <div className="time-logo-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">
          {title} <span className="domainUrl">{domainUrl}</span>
        </p>
      </div>
      <button type="button" className="del-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
