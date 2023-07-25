function InputOptionList({
  textSelect,
  label,
  forid,
  id,
  name,
  options,
  value,
  setValue,
}) {
  return (
    <label htmlFor={forid}>
      <p className="paragraphInput">{label}</p>
      <select
        className="select"
        id={id}
        name={name}
        value={value}
        onChange={setValue}
      >
        <option value="">{textSelect}</option>
        {options.map((entry) => (
          <option value={entry.value} key={entry.value}>
            {entry.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default InputOptionList;
