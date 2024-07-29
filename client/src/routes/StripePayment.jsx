import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "../components/PaymentForm";
 
const stripe = loadStripe('pk_test_51PYk4pEM5RDezzKdAc0G3CC6HFef0aat4IPHIJH7qMUHUubLVyoEKlmy0QrQxmm9wSoi7O5szE592w0jfaBzoE9P00i9nUE1oN');
 
const StripePayment = () => {
    const [clientSecret, setClientSecret] = useState(null);
 
    useEffect(() => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
                items: [{ id: 1, name: "momos", amount: 2.00 }],
            })
            .then((resp) => setClientSecret(resp.data.clientSecret));
    }, []);
 
    const options = {
        clientSecret,
        theme: "stripe",
    };
 
    return (
        clientSecret && (
            <Elements stripe={stripe} options={options}>
                <PaymentForm></PaymentForm>
            </Elements>
        )
    );
};
 
export default StripePayment;