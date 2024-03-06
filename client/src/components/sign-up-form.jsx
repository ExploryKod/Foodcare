import { useState }  from 'react';
// Nous créons cet objet qui sera la valeur de départ de useState
// Nous destructurons l'objet ensuite dans notre composant pour utiliser séparément dans le form ses propriétés.
// value="xxx" sera ce qui les relit.
// Nous destructurons pas directement defaultFormFields mais plutôt formFields car il faut passer par useState et c'est formFields qui y reprend le contenu de defaultFormFields.

// Ensuite : on va devoir créer un évènement onChange dans chaque champs du formulaire 
// L'évènement sera handleChange et il faut le rattacher à chaque champ distinct. 
// Pour les distinguer et les rattacher à event (ou e), alors on passe par la name="xxx" 
// Or chaque valeur de name doit correspondre exactement aux propriétés de defaultFormFields.
// Puis bien sûr le relier à la fonction callback (handleChange) donc demander via destructuration à event de nous donner aussi la valeur.

// Cette fonction handleChange va s'occupper de poser les info aprés le retour dans l'état donc via SetFormFields
// Nous n'avons besoin de mettre à jour qu'un seul champ, les autres seront dans setFormFields mais sous forme de spread operator.
// le spread operator permet de prendre toute les valeurs de formFields (donc de defaultFormFields) 
// Puis pour ne prendre qu'une seul de ces valeurs au 1er argument de la fonction SetFormField, nous utilisons [x] pour n'appliquer la fonction que sur x
// Savoir pourquoi c'est de name dont il s'agit (cad l'event donc le name de chaque input)

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target; 

        setFormFields({...formFields, [name]:value})
        
    }

    return(
        <>
            <h1> S'inscrire avec son email</h1>
            <form className="group" onSubmit = {() => {}}>
                <label>Votre pseudo</label>
                <input className='form-input' type='text' required onChange={handleChange} name='displayName' value={displayName}></input>

                <label>Votre email</label>
                <input className='form-input' type='email' required onChange={handleChange} name='email' value={email}></input>

                <label>Votre mot de passe</label>
                <input  className='form-input' type='password' required onChange={handleChange} name='password' value={password}></input>

                <label>Confirmez le mot de passe</label>
                <input className='form-input' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}></input>
                <button className="button-container" type='submit'>S'enregistrer</button>
            </form>
        </>
    );
};

export default SignUpForm;