import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup(props) {
  const isLoading = props.onLoading;

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(props.card)
    }

  return (
    <PopupWithForm 
      name={'confirm-delete-form'} 
      title='Вы уверены?'
      isOpen={props.isOpen}
      onClose={props.onClose} 
      onSubmit={handleSubmit} 
      onLoading={props.onLoading} 
      card={props.card}>
      <fieldset className={'popup__inputs'}>
        <button type="submit" className={`popup__submit-button ${isLoading && '.popup__submit-button_inactive'}`}>
          {isLoading? 'Удаление...' : 'Да'}
        </button>
      </fieldset>
    </PopupWithForm>
  )
}

export default ConfirmDeletePopup