function ImagePopup(props) {
    return (
      <div className={`popup popup_full-picture ${props.card? 'popup_opened' : ''}`}>
        <div className="popup__frame">
          <button 
            type="button" 
            onClick={props.onClose} 
            className="popup__close-button" 
            aria-label="закрыть фото">
            {}
          </button>
          <img 
            src={props.card?.link} 
            alt={props.card?.name} 
            className="popup__image"/>
          <p className="popup__caption">
            {props.card?.name}
          </p>
        </div>
      </div>
    )
}
  
export default ImagePopup;