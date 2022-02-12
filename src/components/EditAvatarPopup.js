import PopupWithForm from './PopupWithForm';
import {useEffect, useRef} from 'react';
import useInput from '../utils/formInput';

function EditAvatarPopup(props) {
  const avatarRef = useRef();
  const isOpen = props.isOpen;
  const isLoading = props.onLoading;
  const avatar = useInput('', isOpen);
  const showAvatarError = !avatar.isCorrect && avatar.error;
  const showDisabledSubmitButton = avatar.disabledSubmitButton || isLoading;

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value)
  }

  
  useEffect(() => {
    !isOpen && (avatarRef.current.value = '')
  }, [isOpen])

  return (
  
    <PopupWithForm 
      name={'update-avatar-form'}
      title='Обновить аватар'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onLoading={props.onLoading}>
      <fieldset className={'popup__inputs'}>
        <input 
          type="url"
          className="popup__input"
          name="link"
          ref={avatarRef}
          onChange={(event) => {
              avatar.handleError(event.target);
          }}
          placeholder="Ссылка на картинку профиля"
          id="avatar-link"
          required/>
        <span className={`popup__error ${showAvatarError && 'popup__error_visible'}`}>
          {avatar.error}
        </span>
        <button type="submit" className={`popup__submit-button ${showDisabledSubmitButton && 'popup__submit-button_inactive'}`}>
          {isLoading ? 'Сохранение...' : 'Сохранить'}
        </button>
      </fieldset>
    </PopupWithForm>)
}

export default EditAvatarPopup
