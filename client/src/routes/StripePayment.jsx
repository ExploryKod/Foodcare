import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Ban, LoaderPinwheel } from 'lucide-react'
import PaymentForm from "../components/PaymentForm";

const stripe = loadStripe('pk_test_51PYk4pEM5RDezzKdAc0G3CC6HFef0aat4IPHIJH7qMUHUubLVyoEKlmy0QrQxmm9wSoi7O5szE592w0jfaBzoE9P00i9nUE1oN');
 
const StripePayment = () => {
    const [clientSecret, setClientSecret] = useState(null);
    const [loading, setLoading] = useState(false);
    const [displayError, setDisplayError] = useState({message: "", isError: false});
 
    useEffect(() => {
        setLoading(true)
        axios
            .post(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
                items: [{ id: 1, name: "momos", amount: 2.00 }],
            })
            .then((resp) => {
                setClientSecret(resp.data.clientSecret)
                setLoading(false);
            })
            .catch(function (error) {
                if (error.response) {
         
                  console.error(error.response.data);
                  console.errpr(error.response.status);
                  console.error(error.response.headers);
                  setDisplayError({message:`Raison: ${error.response.status}`, isError: true})
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.error(error.request);
                  setDisplayError({message:`Raison: statut ${error.request.status}`, isError: true})
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.error('Error', error.message);
                  setDisplayError({message: `Raison ${error.message}`, isError: true})
                }
                console.error(error.config);
            })
            .finally (function () {
                setLoading(false);  // Set loading state to false once data is fetched or an error occurs
            });
    }, []);
 
    const options = {
        clientSecret,
        theme: "stripe",
    };

    if(loading) {
       return (<div className="container-center-child container-center-child--column">
            <p className="category-text">Le chargement du module de paiement est en cours...</p>
            <LoaderPinwheel size={50} color={'orange'} />
        </div>)
    }
 
    return (
        clientSecret ? (
            <Elements stripe={stripe} options={options}>
                {!displayError.isError && !loading ? 
                (<PaymentForm></PaymentForm>) : 
                (<div className="container-center-child container-center-child--column">
                    <p className="category-text">Le service de paiement est actuellement indisponible</p>
                    <p className="category-text">{displayError.message}</p>
                    <Ban size={100} color={'red'} />
                    </div>)}
            </Elements>)
            : (<div className="container-center-child container-center-child--column">
                <p className="category-text">La clé secréte n'a pas été renouvelé pour ce service : il est indisponible</p>
                <p className="category-text">{displayError.message}</p>
                <Ban size={100} color={'red'} />
                </div>)
        )
};
 
export default StripePayment;