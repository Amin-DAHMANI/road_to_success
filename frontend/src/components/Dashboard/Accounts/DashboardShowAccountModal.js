import { useContext } from "react";

import { ResizeContext } from "../../../utils/context/ResizeContext";

function DashboardShowAccountModal({ account, setShowAccount }) {
  const { isDesktopWidth } = useContext(ResizeContext);
  const imageLink = "/assets/uploads/images/profile_images/" + account.picture;

  return (
    <div id="borderShowAccountModal">
      <table id="showAccountModal">
        <tr>
          <td>
            <h3 className="titlesAccountFields">Catégorie :</h3>
          </td>
          <td>
            <h3 className="titlesAccountFields">Identifiant :</h3>
          </td>
        </tr>
        <tr>
          <td>
            <p>{account.category}</p>
          </td>
          <td>
            <p>{account.identifiant}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className="titlesAccountFields">Email :</h3>
          </td>
          <td>
            <h3 className="titlesAccountFields">Pseudo :</h3>
          </td>
        </tr>
        <tr>
          <td>
            <p>{account.email}</p>
          </td>
          <td>
            <p>{account.pseudo}</p>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h3 className="titlesAccountFields">Photo de profil :</h3>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <p id="contentPictureAccount">
              <img
                alt="Profil"
                title="Profil"
                src={imageLink}
                id="pictureAccount"
              />
            </p>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h3 className="titlesAccountFields">Biographie :</h3>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <p>{account.bio}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className="titlesAccountFields">Date de création :</h3>
          </td>
          <td>
            <h3 className="titlesAccountFields">Date de modification :</h3>
          </td>
        </tr>
        <tr>
          <td>
            <p>{account.createdAt}</p>
          </td>
          <td>
            <p>{account.updatedAt}</p>
          </td>
        </tr>
        <tr id="buttonsModal">
          <td colSpan="2">
            <button id="closeModal" onClick={() => setShowAccount(false)}>
              Fermer la fenêtre
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default DashboardShowAccountModal;
