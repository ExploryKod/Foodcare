import { useState, useRef } from 'react';
import '../styles/upload.css';
import FileList from '../components/uploadList';
import ImageGallery from '../components/imageList';
import { Config } from '../config/config';

export const UploadForm = () => {
  
    const [flashMessage, setFlashMessage] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const fileInputRef = useRef(null);
    const [toggleImages, setToggleImages] = useState(false);
    const [toggleFiles, setToggleFiles] = useState(false);

    const handleNameChange = (e) => {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const categoryIdAttribute = selectedOption.getAttribute('data-category-id');
  
      setSelectedName(e.target.value);
      setCategoryId(categoryIdAttribute);
    };

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
            setTimeout(() => {
              setFlashMessage('');
            }, 3000);
            return;
          }

          const categoryName = formData.get('category_name');
          const categoryNameId = formData.get('category_name_id');
          const imageName = formData.get('image_name');
          const productImageUrl = categoryName+'_'+imageName+'.jpeg';
          const productPrice = formData.get('purchasing_product_price') * 1.2;

          try {
            const response = await fetch(`${Config.siteUrl}/upload_files`, {
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

                try {
                  // Post the product data
                  const productResponse = await fetch(`${Config.siteUrl}/products`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ categoryNameId: categoryNameId, 
                                           categoryName: categoryName, 
                                           image_name: imageName,
                                           productImageUrl: productImageUrl,
                                           productPrice: productPrice }),
                  });
          
                  if (productResponse.ok) {
                    // Product post successful
                    console.log('Product post successful!');
                    const productData = await productResponse.json();
                    setFlashMessage('le produit "'+productData.image_name+'" a bien été créé en base de donnée');
                    // Reset the form or perform any additional actions
                  } else {
                    console.error('Product post failed!');
                    setFlashMessage('Il y a eu un problème lors de la soumission du formulaire de produit');
                  }
                } catch (error) {
                  console.error('Product post failed:', error);
                  setFlashMessage('Il y a eu une erreur lors de la soumission du formulaire de produit');
                }
            
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
          <div className="upload-page container">
          {flashMessage && <div className="output-message">{flashMessage}</div>}
              <div className="container__inner-start">
                <div className="inner-start__title">
                <h1>Photos de produits</h1>
                  <p>Nous vous invitons à nous faire part de nouveaux produits en envoyant ici des photos et une description.</p>
                </div>
                 
                  <form id='form'>
                  <label htmlFor="category_name">Choix de la catégories d'aliment:</label>
                      <select className="input-select" id="category_name" name="category_name" value={selectedName} onChange={handleNameChange} required>
                        <option value="proteines" data-category-id="1">Proteines</option>
                        <option value="legumes" data-category-id="2">Légumes</option>
                        <option value="epices" data-category-id="3">Epices</option>
                        <option value="fruits" data-category-id="4">Fruits</option>
                        <option value="boissons" data-category-id="5">Boissons</option>
                        <option value="recettes" data-category-id="6">Recettes</option>
                      </select>
                      <input type="hidden" name="category_name_id" value={categoryId} />
                      <div className="input-group">
                          <label htmlFor='image-name'>Nom de l'image: </label>
                          <input name='image_name' id='image-name' placeholder="tomate" required />
                      </div>
                      <div className="input-group product-price">
                          <label htmlFor='product_price'>Proposition de prix <span className="optional">(optionnel)</span> :
                          <p>Cette proposition sera augmentée des coûts de distribution (20%)</p>
                          </label>
                          <input type="number" name='purchasing_product_price' id='product_price' placeholder='0' />
                          <span> €</span>
                      </div>
                      <div className="input-group product-description">
                        <label htmlFor="product-description">Décrivez votre produit <span className="optional">(optionnel)</span> :</label>
                        <textarea id="product-description" name="product-description" rows="2" cols="100"></textarea>
                      </div>
                      <div className="input-group">
                        <label htmlFor="files">Chargez le fichier: </label>
                        <input name="files" id="files" type="file" multiple required ref={fileInputRef} style={{ display: 'none' }}/>
                        <button className="custom-file-button" type="button" onClick={handleFileButtonClick}>Je choisis mon fichier</button>
                      </div>
                      <div className="container__submit-btn">
                        <button className="submit-btn upload-btn" type='submit' onClick={sendFile}>Charger mes fichiers</button>
                      </div>
                  </form>
              </div>  
              <div className="container__inner-end">
                <button className="upload-btn  btn-images" type='button' onClick={handleToggleImages}>Ouvrir la gallerie</button>
                <button className="upload-btn  btn-list" type='button' onClick={handleToggleFile}>Lister les fichiers</button>  
              </div>
       
        <div>
        {toggleImages && <ImageGallery />}
        {toggleFiles &&   <FileList /> }
        
        </div>
          </div>
        </>
      );
  };