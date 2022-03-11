import React from "react";
import { useState } from "react";

const Modal = ({ setActive, isActive }) => {
  const [isRegister, setRegister] = useState(false);

  const closeModalHandler = () => {
    setActive(!isActive);
  };

  return (
    <>
      {isActive && (
        <div id="modal" className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="tabs is-centered">
                    <ul>
                      <li
                        className={`${!isRegister && "is-active"}`}
                        id="activeIdOne"
                      >
                        <a
                          onClick={() => setRegister(false)}
                          data-select="one"
                          id="one"
                          href="javascript:void(0)"
                        >
                          <span className="icon is-small">
                            <i className="fa fa-user" aria-hidden="true"></i>
                          </span>
                          <span>Connexion</span>
                        </a>
                      </li>
                      <li
                        id="activeIdTwo"
                        className={`${isRegister && "is-active"}`}
                      >
                        <a
                          onClick={() => setRegister(true)}
                          data-select="two"
                          id="two"
                          href="javascript:void(0)"
                        >
                          <span className="icon is-small">
                            <i className="fas fa-sign-in-alt"></i>
                          </span>
                          <span>Inscription</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {isRegister ? (
                    <div className="register" id="tabs2">
                      <div className="field">
                        <label className="label">Nom</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Gustave"
                          ></input>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Nom d'utilisateur</label>
                        <div className="control has-icons-left has-icons-right">
                          <input
                            className="input"
                            type="text"
                            placeholder="Alain de l'ombre"
                          ></input>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                          <span className="icon is-small is-right"></span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Mot de passe</label>
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="password"
                            placeholder="****"
                          ></input>
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label">
                          Vérification du mot de passe
                        </label>
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="password"
                            placeholder="****"
                          ></input>
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                          <input
                            className="input"
                            type="email"
                            placeholder="tonEmail@blabla.fr"
                          ></input>
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control mt-5">
                          <button className="button is-link">
                            Inscription
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="login" id="tabs1">
                      <div className="field">
                        <label className="label">Nom d'utilisateur</label>
                        <div className="control has-icons-left has-icons-right">
                          <input
                            className="input"
                            type="text"
                            placeholder="Alin_deloin"
                          ></input>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                          <span className="icon is-small is-right"></span>
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Mot de passe</label>
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="password"
                            placeholder="*******"
                          ></input>
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <div className="control mt-5">
                          <button className="button is-link">Connexion</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
            <button
              onClick={closeModalHandler}
              className={`modal-close is-large ${isActive ? "is-active" : ""}`}
              aria-label="close"
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
