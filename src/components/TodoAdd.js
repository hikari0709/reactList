export const TodoAdd = ({
  buttonText,
  inputElement,
  handleAddListItem
  }) => {
    return (
      <>
        <textarea ref={inputElement} />
        <button onClick={handleAddListItem}>{buttonText}</button>
      </>
    );
  };
