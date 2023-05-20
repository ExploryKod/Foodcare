import { useState } from 'react';
import '../styles/upload.css';

export const UploadForm = () => {
    const [flashMessage, setFlashMessage] = useState('');
    const [showFlashMessage, setShowFlashMessage] = useState(false);
  
      const sendFile = async (e) => {
          e.preventDefault();
          const form = document.getElementById('form');
          const formData = new FormData(form);
          
          try {
            const response = await fetch('http://localhost:5000/upload_files', {
              method: 'POST',
              body: formData,
            });
            
            if (response.ok) {
              // Handle successful upload
              console.log('Upload successful!');
              const data = await response.json();
                console.log(data)

                data.map((item) => {   
                  console.log(item.filename);
                  setFlashMessage('Vous avez bien créer votre fichier image nommé: '+item.filename);
                  setTimeout(() => {
                    setFlashMessage('');
                  }, 2000);
                  return item.filename;
                });

             
            
            } else if (response.status === 409) {
              // Handle image name already taken error
              const data = await response.json();
              console.log(data.error);
              setFlashMessage(data.error);
            } else if (response.status === 400) {
              // Handle upload error
              console.error('Upload failed!');
              setFlashMessage('Il y a eu un problème avec la création de votre image');
              setTimeout(() => {
                setFlashMessage('');
              }, 2000);
            }
          } catch (error) {
            console.error('Upload failed:', error);
            setFlashMessage('Il y a eu une erreur dans la requête');
            setTimeout(() => {
              setFlashMessage('');
            }, 2000);
          }
        };
  
      return (
        <>
          <div className="container">
          {flashMessage && <div className="output-message">{flashMessage}</div>}
              <div className="container_inner">
                  <h1>Envoyez vos photos de produits</h1>
                  <form id='form'>
                      <div className="input-group">
                          <label htmlFor='name'>Catégorie</label>
                          <input name='name' id='name' placeholder="Nom de la catégorie d'image" />
                      </div>
                      <div className="input-group">
                          <label htmlFor='files'>Select files</label>
                          <input name='files' id='files' type="file" multiple />
                      </div>
                      <button className="submit-btn" type='submit' onClick={sendFile}>Upload</button>
                  </form>
              </div>          
          </div>
        </>
      );
  };