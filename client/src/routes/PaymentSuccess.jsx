import { Salad, Smile  } from 'lucide-react'
const PaymentSuccess = () => {
    return (
        <div className="stripe-paiement-container">
            <h1 className="category-title">Merci d'avoir acheté un produit Foodcare !</h1>
            <p  className="category-text">Votre paiement a bien été effectué. Consultez votre courriel pour avoir les détails de votre commande</p>
            <div className="container-center-child container-center-child--row">
                <Salad size={150} color={'teal'}/>
                <Smile size={150} color={'orange'} />
            </div>
        </div>
    );
}
 
export default PaymentSuccess;