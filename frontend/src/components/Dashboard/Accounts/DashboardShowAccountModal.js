function DashboardShowAccountModal({ account, setShowAccount }) {
  const imageLink = "/assets/uploads/images/profile_images/" + account.picture;

  return (
    <div id="borderShowAccountModal">
      <section id="showAccountModal">
        <p className="rowShowAccount">
          <div>
            <p>
              <h3 className="titlesAccountFields">Catégorie :</h3>
              {account.category}
            </p>
            <p>
              <h3 className="titlesAccountFields">Identifiant :</h3>
              {account.identifiant}
            </p>
          </div>
          <div>
            <p>
              <h3 className="titlesAccountFields">Email :</h3>
              {account.email}
            </p>
            <p>
              <h3 className="titlesAccountFields">Pseudo :</h3>
              {account.pseudo}
            </p>
          </div>
        </p>
        <p>
          <h3 className="titlesAccountFields">Photo de profil :</h3>
          <img
            alt="Profil"
            title="Profil"
            src={imageLink}
            id="pictureAccount"
          />
        </p>
        <p>
          <h3 className="titlesAccountFields">Biographie :</h3>
          {account.bio}
        </p>
        <p className="rowShowAccount">
          <div>
            <h3 className="titlesAccountFields">Date de création :</h3>
            {account.createdAt}
          </div>
          <div>
            <h3 className="titlesAccountFields">Date de modification :</h3>
            {account.updatedAt}
          </div>
        </p>
        <div id="buttonsModal">
          <button id="closeModal" onClick={() => setShowAccount(false)}>
            Fermer la fenêtre
          </button>
        </div>
      </section>
    </div>
  );
}

export default DashboardShowAccountModal;
