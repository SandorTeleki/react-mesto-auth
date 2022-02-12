import PopupWithForm from './PopupWithForm.js';
import useInput from '../utils/formInput.js'

function AddPlacePopup(props) {
  const isLoading = props.onLoading;
  const isOpen = props.isOpen;
  const cardName = useInput('', isOpen);
  const cardLink = useInput('', isOpen);
  const showCardNameError = !cardName.isCorrect && cardName.error;
  const showCardLinkError = !cardLink.isCorrect && cardLink.error;
  const showDisabledSubmitButton = cardName.disabledSubmitButton || cardLink.disabledSubmitButton || isLoading;


  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(cardName.value, cardLink.value)
  }

  return (
    <PopupWithForm 
      name={'add-card-form'} 
      title='Новое место' 
      isOpen={props.isOpen}
      onClose={props.onClose} 
      onSubmit={handleSubmit}
      onLoading={props.onLoading}>
      <fieldset className={'popup__inputs'}>
        <input 
          type="text"
          className="popup__input"
          name="name"
          value={cardName.value}
          onChange={cardName.handleChange}
          placeholder="Название"
          id="add-title"
          minLength="2"
          maxLength="30"
          required/>
        <span className={`popup__error ${showCardNameError&& 'popup__error_visible'}`}>
          {cardName.error}
        </span>
        <input 
          type="url"
          className="popup__input"
          name="link"
          value={cardLink.value}
          onChange={cardLink.handleChange}
          placeholder="Ссылка на картинку"
          id="add-link"
          required/>
        <span className={`popup__error ${showCardLinkError&& 'popup__error_visible'}`}>
          {cardLink.error}
        </span>
        <button type="submit" className={`popup__submit-button ${showDisabledSubmitButton && 'popup__submit-button_inactive'}`}>
          {isLoading? 'Сохранение...' : 'Создать'}
        </button>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup