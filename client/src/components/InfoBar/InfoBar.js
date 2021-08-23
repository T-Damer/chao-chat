import './InfoBar.css'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src={onlineIcon}
        alt="onlineImg"
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      {/* Full refresh to clear socket */}
      <a href="/">
        <img src={closeIcon} alt="closeImg" />
      </a>
    </div>
  </div>
)

export default InfoBar
