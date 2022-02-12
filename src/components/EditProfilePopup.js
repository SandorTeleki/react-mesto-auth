import PopupWithForm from './PopupWithForm';
import {useContext, useEffect} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import useInput from '../utils/formInput'

function EditProfilePopup (props) {
  const currentUser = useContext(CurrentUserContext);
  const isLoading = props.onLoading;
  const isOpen = props.isOpen;
  const name = useInput(currentUser.name, isOpen);
  const description = useInput(currentUser.about, isOpen);
  const showDescriptionError = !description.isCorrect && description.error;
  const showNameError = !name.isCorrect && name.error;
  const showDisabledSubmitButton = name.disabledSubmitButton || description.disabledSubmitButton || isLoading;


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name.value, description.value)
  }


  useEffect(()=>{
    name.handleChange(currentUser.name);
    description.handleChange(currentUser.about)
  }, [currentUser])


  return (
    <PopupWithForm 
      name={'edit-profile-form'} 
      title='Редактировать профиль'
      isOpen={props.isOpen}
      onClose={props.onClose} 
      onSubmit={handleSubmit} 
      onLoading={props.onLoading}>
      <fieldset className={'popup__inputs'} form={'edit-profile-form'}>
        <input 
          type="text"
          className="popup__input"
          name="profileName"
          value={name.value}
          onChange={name.handleChange}
          placeholder="имя"
          id="nameinput"
          minLength="2"
          maxLength="40"
          required/>
        <span className={`popup__error ${showNameError&& 'popup__error_visible'}`}>
          {name.error}
        </span>
        <input 
          type="text"
          className="popup__input"
          name="description"
          value={description.value}
          onChange={description.handleChange}
          placeholder="работа"
          id="jobdescription"
          minLength="2"
          maxLength="200"
          required/>
        <span className={`popup__error${showDescriptionError&& 'popup__error_visible'}`}>
          {description.error}
        </span>
        <button type="submit" className={`popup__submit-button ${(showDisabledSubmitButton)&& 'popup__submit-button_inactive'}`}>
          {isLoading? "Сохранение...": "Сохранить"}
        </button>
      </fieldset> 
    </PopupWithForm>
  )
}

export default EditProfilePopup