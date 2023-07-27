import axios from "axios";

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

function DashboardTableAccounts() {
  const { UserID } = useContext(AuthContext);
  const [tableAccounts, setTableAccounts] = useState([]);
  const deleteIconLink = "./../assets/images/icone_images/delete.png";
  const updateIconLink = "./../assets/images/icone_images/update.png";

  useEffect(() => {
    const arrayAccounts = [];
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/`,
      withCredentials: true,
      responseType: "json",
    }).then((res) => {
      res.data.forEach((account) => arrayAccounts.push(account));
      setTableAccounts(arrayAccounts);
      console.log(arrayAccounts);
    });
  }, [tableAccounts]);

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

  const handleUpdateAccount = (id) => {};

  return (
    <table id="dashboardTableAccounts">
      <thead>
        <tr>
          <td className="checkboxColumn">
            <input type="checkbox" />
          </td>
          <td className="tdAlignLeft">Catégorie</td>
          <td className="tdAlignLeft">Identifiant</td>
          <td className="tdAlignLeft">Pseudo</td>
          <td className="tdAlignLeft">Email</td>
          <td className="tdAlignLeft">Photo de profil</td>
          <td className="tdAlignLeft">Biographie</td>
          <td className="tdAlignLeft">Date de création</td>
          <td className="tdAlignLeft">Date de modification</td>
          <td className="updateColumn">Modifier</td>
          <td className="deleteColumn">Supprimer</td>
        </tr>
      </thead>
      <tbody>
        {UserID &&
          tableAccounts.map((account, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0 || index === 0 ? "pairLine" : "impairLine"
              }
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{account.category}</td>
              <td>{account.identifiant}</td>
              <td>{account.pseudo}</td>
              <td>{account.email}</td>
              <td>{account.picture}</td>
              <td>{account.bio}</td>
              <td>{account.createdAt}</td>
              <td>{account.updatedAt}</td>
              <td>
                <img
                  className="updateButton"
                  src={updateIconLink}
                  alt="Modifier l'entrée"
                  title="Modifier l'entrée"
                  onClick={() => handleUpdateAccount(account._id)}
                />
              </td>
              <td>
                <img
                  className="deleteButton"
                  src={deleteIconLink}
                  alt="Supprimer l'entrée"
                  title="Supprimer l'entrée"
                  onClick={() => handleDeleteAccount(account._id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default DashboardTableAccounts;
