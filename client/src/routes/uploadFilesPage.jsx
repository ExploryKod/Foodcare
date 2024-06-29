import ImageGallery from "../components/imageList";
import FileList from "../components/uploadList";
import {useState} from "react";

const UploadFilesPage = () => {

    const [toggleImages, setToggleImages] = useState(false);
    const [toggleFiles, setToggleFiles] = useState(false);

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

    return (
        <div className="show-upload-container">
            <div className="uploads-list">
                <button className="upload-btn  btn-images" type='button' onClick={handleToggleImages}>Ouvrir la gallerie</button>
                <button className="upload-btn  btn-list" type='button' onClick={handleToggleFile}>Lister les fichiers</button>
            </div>
            <div className="uploads-show">
                {toggleImages && <ImageGallery />}
                {toggleFiles &&   <FileList /> }
            </div>


        </div>
    )
}

export default UploadFilesPage