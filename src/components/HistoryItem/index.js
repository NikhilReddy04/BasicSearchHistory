import './index.css'

const HistoryItem = props => {
  const {element, uniqueId, onDelete} = props
  const {domainUrl, title, logoUrl, timeAccessed} = element
  const onClickButton = () => {
    onDelete(uniqueId)
  }
  return (
    <li className="history-item-container">
      <p className="time-accessed-para">{timeAccessed}</p>
      <img src={logoUrl} className="logo-img" alt="domain logo" />
      <p className="history-domain">{title}</p>
      <p className="history-url">{domainUrl}</p>
      <button
        data-testid="delete"
        className="del-button"
        onClick={onClickButton}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
