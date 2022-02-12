function PopupWithForm(props) {
    return (
      <div className={`popup popup_type_${props.name} ${props.isOpen? 'popup_opened':''}`}>
        <div className="popup__container">
          <button 
            type="button" 
            onClick={props.onClose} 
            className={`popup__close-button popup__close-button_type_${props.name}`}
            aria-label={`закрыть ${props.title}`}>
            {}
          </button>
          <form 
            className={`edit-form popup__form popup__form_type_${props.name}`} 
            onSubmit={props.onSubmit}
            name={props.name} 
            id={props.name} 
            noValidate>
            <h2 className={`popup__heading ${props.name === 'update-avatar-form'? 'popup__form-heading_type_update-avatar-form': ''}`}>
              {props.title}
            </h2>
            {props.children}
          </form>
        </div>
      </div>
    )
}
  
export default PopupWithForm;