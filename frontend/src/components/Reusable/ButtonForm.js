function ButtonForm(props) {
  return (
    <div className="containerButtonForm">
      <button type="submit" className="buttonForm">
        {props.children}
      </button>
    </div>
  );
}

export default ButtonForm;
