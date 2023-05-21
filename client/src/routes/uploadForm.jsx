import { useState, useEffect, useRef } from 'react';
import '../styles/upload.css';
import FileList from '../components/uploadList';
import ImageGallery from '../components/imageList';

export const UploadForm = () => {
  
    const [flashMessage, setFlashMessage] = useState('');
    const [getUpload, setGetUpload] = useState(false);
    const fileInputRef = useRef(null);
    const [toggleImages, setToggleImages] = useState(false);
    const [toggleFiles, setToggleFiles] = useState(false);

    const getMyUpload = (e) => {  
        if(!getUpload) {  
        setGetUpload(true)
        e.target.textContent = 'Cessez l\' affichage des fichiers';
      }

      if(getUpload) {  
        setGetUpload(false)
        e.target.textContent = 'Afficher les fichiers';
      } 
    }

    const handleToggleImages = (e) => {  
      if(!toggleImages) {  
        setToggleImages(true)
        if(toggleFiles) {  
          setToggleFiles(false)
        }
        e.target.textContent = 'Fermer la gallerie';
      } else  {  
        setToggleImages(false)
        e.target.textContent = 'Ouvrir la gallerie';
      }
    }

    const handleToggleFile = (e) => {  
      if(!toggleFiles) {  
        setToggleFiles(true)
        if(toggleImages) {  
          setToggleImages(false)
        }
        e.target.textContent = 'Fermer la liste';
      } else  {  
        setToggleFiles(false)
        e.target.textContent = 'Lister les fichiers';
      }
    }


      const sendFile = async (e) => {
          e.preventDefault();
          const form = document.getElementById('form');
          const downloadButton = document.getElementById('download-btn');
          downloadButton.style.display = 'block';
          console.log(form);
          const formData = new FormData(form);
          
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
            downloadButton.style.display = 'none';
            setTimeout(() => {
              setFlashMessage('');
            }, 3000);
            return;
          }

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
                  }, 3000);
                  return item.filename;
                });
            
            } else if (response.status === 409) {
              const data = await response.json();
              console.log(data.error);
              setFlashMessage(data.error);
            } else if (response.status === 403) {
              console.error('number max');
              setFlashMessage('Nombre maximum de fichiers atteint');
            } else if (response.status === 400) {
              console.error('Upload failed!');
              setFlashMessage('Il y a eu un problème avec la création de votre image');
              setTimeout(() => {
                setFlashMessage('');
              }, 3000);
            }
          } catch (error) {
            console.error('Upload failed:', error);
            setFlashMessage('Il y a eu une erreur dans la requête');
            setTimeout(() => {
              setFlashMessage('');
            }, 3000);
          }
        };

      
        const handleFileButtonClick = () => {
          fileInputRef.current.click();
        };
      
  
     return (
        <>
          <div className="container">
          {flashMessage && <div className="output-message">{flashMessage}</div>}
              <div className="container__inner-start">
                  <h1>Envoyez vos photos de produits</h1>
                  <form id='form'>
                      <div className="input-group">
                          <label htmlFor='name'>Nom du fichier</label>
                          <input name='name' id='name' placeholder="Nom de la catégorie d'image" required />
                      </div>
                      <div className="input-group">
                        <label htmlFor="files">Chargez le fichier: </label>
                        <input name="files" id="files" type="file" multiple required ref={fileInputRef} style={{ display: 'none' }}/>
                        <button className="custom-file-button" type="button" onClick={handleFileButtonClick}>Je choisis mon fichier</button>
                      </div>
                      <button className="submit-btn" type='submit' onClick={sendFile}>Charger mes fichiers</button>
                      <button className="submit-btn btn-download" type='button' id='download-btn' onClick={getMyUpload}>Afficher les fichiers</button>
                  </form>
              </div>  
              <div className="container__inner-end">
                <button className="submit-btn btn-images" type='button' onClick={handleToggleImages}>Ouvrir la gallerie</button>
                <button className="submit-btn btn-list" type='button' onClick={handleToggleFile}>Lister les fichiers</button>  
              </div>
       
        <div>
        {toggleImages && <ImageGallery />}
        {toggleFiles &&   <FileList /> }
        
        </div>
          </div>
        </>
      );
  };