import axios from "axios";

function DeleteIcon({ id }) {
  const deleteIconLink = "/assets/images/icone_images/traverser.svg";

  const handleDeleteAccount = (id) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/user/${id}`,
      withCredentials: true,
    })
      .then((res) => {
        res.status(200).send({ message: "Compte supprímé" });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <img
      src={deleteIconLink}
      alt="Supprimer les données"
      title="Supprimer les données"
      className="icon deleteIcon"
      onClick={() => handleDeleteAccount(id)}
    />
  );
}

export default DeleteIcon;
