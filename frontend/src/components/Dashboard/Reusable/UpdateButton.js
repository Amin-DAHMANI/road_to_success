function UpdateButton() {
  const updateIconLink = "/assets/images/icone_images/rafraichir.svg";
  return (
    <img
      src={updateIconLink}
      alt="Modifier les données"
      title="Modifier les données"
      className="updateIcon icon"
    />
  );
}

export default UpdateButton;
