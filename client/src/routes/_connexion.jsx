import React, { useState } from 'react';

const Connexion = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({password: "", username: ""})
  const [registerData, setRegisterData] = useState({username: "", firstname:"", lastname: "", email:"", password:"", phone:""})
  const [flashMessage, setFlashMessage] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        body: new URLSearchParams({
          ...registerData
        })
      });

      if (response.ok) {
        console.log('réponse register bien reçu');
        const data = await response.json();
        console.log(data)
        setFlashMessage(data.message);

      } else {
        console.log('échec de la réponse register');
      }

    } catch(error) {
      console.error('log failed:', error);
      setFlashMessage('Il y a eu une erreur dans la requête');
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    }
  };



  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/auth/logged', {
        method: 'POST',
        body: new URLSearchParams({
          ...formData
        })
      });
      
      if (response.ok) {
        // Handle successful upload
        console.log('réponse bien reçu');
        const data = await response.json();
        console.log(data)
        setFlashMessage(data.message);

      } else {
        console.log('échec de la réponse');
      }
    } catch (error) {
      console.error('log failed:', error);
      setFlashMessage('Il y a eu une erreur dans la requête');
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    }
  };

  const handleRegisterChange = (e) => {
    setRegisterData(prevState => {
        return {
            ...prevState,
           
            [e.target.name]: e.target.value
        }
    }) 
}

  const handleChange = (e) => {
    setFormData(prevState => {
        return {
            ...prevState,
           
            [e.target.name]: e.target.value
        }
    }) 
}

  return (
    <main className="page-connexion">
      <div className="outer-connexion">
        <div className="inner-connexion">
        {flashMessage && <div className="output-message x-center-position">{flashMessage}</div>}
          {toggle ? (
            <div className="container-inscription">
              <form className="form-container" onSubmit={handleRegisterSubmit} method="post">
                <div className="form-elem">
                  <input type="text" name="username" id="username" placeholder="Votre prénom" onChange={handleRegisterChange} required  />
                </div>
                <div className="form-elem">
                  <input type="text" name="lastname" id="lastname" placeholder="Votre nom" onChange={handleRegisterChange} required  />
                </div>
                <div className="form-elem">
                  <input type="text" name="email" id="email" placeholder="Votre email" onChange={handleRegisterChange} required  />
                </div>
                <div className="form-elem">
                  <input type="password" name="password" id="password" placeholder="mot de passe" onChange={handleRegisterChange} required />
                </div>
                <div className="form-elem">
                  <input type="number" name="phone" id="phone" placeholder="téléphone" onChange={handleRegisterChange}  />
                </div>
                <div className="form-elem">
                  <button className="btn-1" type="submit">Créer son compte</button>
                </div>
                <div className="form-elem">
                  <p>Déjà Inscris ?
                   <span className="to-connexion-link" onClick={handleToggle}> Se connecter</span></p>
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
                <form id="login-form" method="post" onSubmit={handleLoginSubmit}>
                  <div className="form-elem">
                    <input type="text" name="username" id="username" placeholder="username" onChange={handleChange} required />
                  </div>
                  <div className="form-elem">
                    <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange} required />
                  </div>
                  <div className="form-elem">
                    <button type="submit" className="btn-1">Se connecter</button>
                  </div>
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
