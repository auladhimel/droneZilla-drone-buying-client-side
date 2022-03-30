import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';
import { ProgressBar } from 'react-bootstrap';

const CheckoutForm = ({orderPay}) => {

    const{price , customerName, _id}= orderPay;

    const stripe = useStripe()
    const elements = useElements();
    const {user}= useAuth();


    const [error, setError]= useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing]= useState(false);
    const [clientSecret, setClientSecret]= useState('');

    useEffect(()=>{
        fetch('https://young-badlands-33283.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data => setClientSecret(data.clientSecret));
    },[price]);

    const handleSubmit= async (e)=>{
        
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
          return;
          }
          setProcessing(true);
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message);
            setSuccess('');
          } 
          else {
              setError('');
            console.log(paymentMethod);
          }      
        //   Payment Intent 

          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: customerName,
                  email: user.email
                },
              },
            },
          );

          if(intentError) {
              setError(intentError.message);
              setSuccess('');
          }
          else{
              setError('');
              setSuccess('Your Payment Processed Successfully');
              console.log(paymentIntent);
              setProcessing(false);

            //   Save to database

            const payment={
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url=`https://young-badlands-33283.herokuapp.com/ordersId/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=> res.json())
            .then(data => console.log(data));
          }
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {processing ? <ProgressBar></ProgressBar> : <button className="btn btn-warning mt-5" type="submit" disabled={!stripe  || success}>
        Pay ${price}
      </button>}
    </form>
    {
        error && <p style={{color:'white', marginTop:'40px' , borderRadius:'5px', fontSize:'20px' ,backgroundColor:'red', padding:'15px 1px'}}>{error}.!!</p>
    }
    {
        success && <p style={{color:'#ffca2c', marginTop:'40px' , borderRadius:'5px', fontSize:'20px' ,backgroundColor:'#061a3a', padding:'15px 1px'}}>{success}!!</p>
    }
        </div>
    );
};

export default CheckoutForm;