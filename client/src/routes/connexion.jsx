import React, { useState } from 'react';
import '../index.scss';

const Connexion = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="page-connexion">
      <div className="outer-connexion">
        <div className="inner-connexion">
          {toggle ? (
            <div className="container-inscription">
              <form className="form-container" action="" method="post">
                <div className="form-elem">
                  <input type="text" name="username" id="username" placeholder="Votre prénom" />
                </div>
                <div className="form-elem">
                  <input type="text" name="lastname" id="lastname" placeholder="Votre nom" />
                </div>
                <div className="form-elem">
                  <input type="text" name="email" id="email" placeholder="Votre email" />
                </div>
                <div className="form-elem">
                  <input type="password" name="password" id="password" placeholder="mot de passe" />
                </div>
                <div className="form-elem">
                  <input type="number" name="phone" id="phone" placeholder="téléphone" />
                </div>
                <div className="form-elem">
                  <button className="btn-1" type="submit">Créer son compte</button>
                </div>
                <div className="form-elem">
                  <button type="button" className="btn-2" onClick={handleToggle}>Se connecter</button>
                </div>
              </form>
            </div>
          ) : (
            <div className="container-connexion">
              <div className="img-container">
                <img src="http://localhost:5000/assets/boiler-logo-2.svg" alt="logo" />
              </div>
              <div className="info-container">
                <div></div>
              </div>
              <div className="form-container">
                <form action="auth/logged" method="post">
                  <div className="form-elem">
                    <input type="text" name="username" id="email" placeholder="username" value="" />
                  </div>
                  <div className="form-elem">
                    <input type="password" name="password" id="password" placeholder="Mot de passe" value="" />
                  </div>
                  <div className="form-elem">
                    <button className="btn-1">Se connecter</button>
                  </div>
                  {/* <div className="form-elem">
                    <button type="button" className="btn-2">Créer un compte</button>
                  </div> */}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Connexion;
