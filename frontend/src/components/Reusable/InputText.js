function InputText({ label, forid, id, name, value, setValue }) {
  return (
    <label htmlFor={forid}>
      <p className="paragraphInput">{label}</p>
      <input
        className="input"
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={setValue}
      />
    </label>
  );
}

export default InputText;
