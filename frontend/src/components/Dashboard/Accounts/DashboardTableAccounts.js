import axios from "axios";

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

import ShowIcon from "./../../Reusable/ShowIcon";
import UpdateIcon from "./../../Reusable/UpdateIcon";
import DeleteIcon from "./../../Reusable/DeleteIcon";

function DashboardTableAccounts() {
  const { UserID } = useContext(AuthContext);
  const [tableAccounts, setTableAccounts] = useState([]);

  useEffect(() => {
    const arrayAccounts = [];
    const fetchAccounts = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/`,
        withCredentials: true,
        responseType: "json",
      })
        .then((res) => {
          res.data.forEach((account) => arrayAccounts.push(account));
          setTableAccounts(arrayAccounts);
        })
        .catch((err) => {});
    };
    fetchAccounts();
  }, [tableAccounts]);

  const handleShowAccount = (id) => {};

  const handleUpdateAccount = (id) => {};

  return (
    <div id="containerDashboardTables">
      {UserID ? (
        <table id="dashboardTableAccounts" className="dashboardTables">
          <thead>
            <tr>
              <td className="checkboxColumn">
                <input type="checkbox" />
              </td>
              <td>Catégorie</td>
              <td>Identifiant</td>
              <td>Pseudo</td>
              <td>Email</td>
              <td>Photo de profil</td>
              <td>Biographie</td>
              <td>Date de création</td>
              <td>Date de modification</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {tableAccounts.map((account, index) => (
              <tr
                key={index}
                className={(index + 1) % 2 === 0 ? "pairLine" : "impairLine"}
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
                <td className="actionsColumn">
                  <ShowIcon onClick={() => handleShowAccount(account._id)} />
                  <UpdateIcon
                    onClick={() => handleUpdateAccount(account._id)}
                  />
                  <DeleteIcon id={account._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div id="notConnected">
          Vous devez être connecté pour consulter ces données.
        </div>
      )}
    </div>
  );
}

export default DashboardTableAccounts;
