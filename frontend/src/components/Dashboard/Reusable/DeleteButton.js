function DeleteButton({ id, deleteFunction }) {
  const deleteIconLink = "/assets/images/icone_images/traverser.svg";

  return (
    <img
      src={deleteIconLink}
      alt="Supprimer les données"
      title="Supprimer les données"
      className="icon deleteIcon"
      onClick={() => deleteFunction(id)}
    />
  );
}

export default DeleteButton;
