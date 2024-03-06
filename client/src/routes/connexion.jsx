import React, { useState } from 'react';


const Connexion = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({password: "", username: ""})
  const [flashMessage, setFlashMessage] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById('login-form');
    // console.log(form);
    // const formData = new FormData(form);
    
    // Check if the required fields are empty
    const requiredInputs = form.querySelectorAll('[required]');
    let isEmpty = false;
    requiredInputs.forEach((input) => {
      if (!input.value) {
        isEmpty = true;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (isEmpty) {
      setFlashMessage('Veuillez remplir tous les champs obligatoires');
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/logged`, {
        method: 'POST',
        body: new URLSearchParams({
          ...formData
        })
      });
      
      if (response.ok) {
        // Handle successful upload
        console.log('log réussit');
        const data = await response.json();
        console.log(data)
        setFlashMessage(data.message);

      } else {
        console.log('échec de login');
      }
    } catch (error) {
      console.error('log failed:', error);
      setFlashMessage('Il y a eu une erreur dans la requête');
      setTimeout(() => {
        setFlashMessage('');
      }, 3000);
    }
  };

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
              <form id='register-form' className="form-container" action="" method="post">
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
                {/*<img src={`${Config.siteUrl}/assets/boiler-logo-2.svg`} alt="logo" />*/}
              </div>
              <div className="info-container">
                <div></div>
              </div>
              <div className="form-container">
                <form id='login-form' method="post" onClick={handleLoginSubmit}>
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
