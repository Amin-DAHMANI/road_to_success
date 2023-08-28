function CreateButton() {
  const createIconLink = "/assets/images/icone_images/plus.svg";
  return (
    <img
      src={createIconLink}
      alt="Ajouter les données"
      title="Ajouter les données"
      className="createIcon icon"
    />
  );
}

export default CreateButton;
