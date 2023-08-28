import axios from "axios";

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

import CreateButton from "../Reusable/CreateButton";
import ShowButton from "../Reusable/ShowButton";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

import DashboardShowAccountModal from "./DashboardShowAccountModal";

function DashboardTableAccounts() {
  const { UserID } = useContext(AuthContext);
  const [tableAccounts, setTableAccounts] = useState([]);
  const [showAccount, setShowAccount] = useState(false);
  const [oneAccount, setOneAccount] = useState(null);

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

  const handleCreateAccount = (id) => {};

  const handleShowAccount = (id) => {
    const getOneAccount = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/${id}`,
        withCredentials: true,
        responseType: "json",
      }).then((res) => {
        setOneAccount(res.data);
        setShowAccount(true);
      });
    };
    getOneAccount();
    console.log(oneAccount);
  };

  const handleUpdateAccount = (id) => {};

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
    <div>
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
                  <td>
                    {account.picture !== null
                      ? account.picture
                      : "Aucune photo"}
                  </td>
                  <td>{account.bio !== null ? account.bio : "Aucune bio"}</td>
                  <td>{account.createdAt}</td>
                  <td>{account.updatedAt}</td>
                  <td className="actionsColumn">
                    <ShowButton
                      id={account._id}
                      showFunction={handleShowAccount}
                    />
                    <UpdateButton
                      id={account._id}
                      updateFunction={handleUpdateAccount}
                    />
                    <DeleteButton
                      id={account._id}
                      deleteFunction={handleDeleteAccount}
                    />
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
      <CreateButton createFunction={handleCreateAccount} />
      {showAccount && (
        <DashboardShowAccountModal
          account={oneAccount}
          setShowAccount={setShowAccount}
        />
      )}
    </div>
  );
}

export default DashboardTableAccounts;
