function ButtonForm(props) {
  return (
    <div className="containerButtonForm">
      <button type="submit" form={props.formid} className="buttonForm">
        {props.children}
      </button>
    </div>
  );
}

export default ButtonForm;
