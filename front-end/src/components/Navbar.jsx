import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const [logActive, setlogActive] = useState(false);

  const toggleBurgerMenu = () => {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  };

  const toggleModal = () => {
    setlogActive(!logActive);
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="./img/logo.jpg"></img>
          </a>
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => {
              setisActive(!isActive);
              toggleBurgerMenu();
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Accueil</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Nos formations</a>
              <div className="navbar-dropdown ">
                <a className="navbar-item  ">
                  Technicien superieur service réseaux
                </a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item ">Réferent digital</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item ">Dévelopeur web</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item ">Concepteur d'application</a>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Vie simploniennes</a>

              <div className="navbar-dropdown ">
                <a className="navbar-item  ">Actualités</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item ">liste des promos</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Partenaire / Entreprise </a>
              <div className="navbar-dropdown ">
                <a className="navbar-item ">Liste partenaire</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item ">Appel à projet</a>
              </div>
            </div>
            <a className="navbar-item ">UIMM Code </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                className={`button is-black modal-button ${
                  logActive ? "is-active" : ""
                }`}
                data-target="#modal"
                aria-haspopup="true"
                onClick={toggleModal}
              >
                Connexion / Inscription
              </button>
              <Modal setActive={setlogActive} isActive={logActive} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
