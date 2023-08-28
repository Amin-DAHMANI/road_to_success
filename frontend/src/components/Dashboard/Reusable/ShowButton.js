function ShowButton({ id, showFunction }) {
  const showIconLink = "/assets/images/icone_images/angle-vers-le-bas.svg";
  return (
    <img
      src={showIconLink}
      alt="Visualiser les données"
      title="Visualiser les données"
      className="showIcon icon"
      onClick={() => showFunction(id)}
    />
  );
}

export default ShowButton;
