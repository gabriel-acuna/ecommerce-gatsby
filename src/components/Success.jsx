import React from 'react';
import CreditCard from '../images/payment.png';

export default (props) => {

    return (
        <div className="card p-12 text-center">
            <div>
                <img src={ CreditCard} className="h-48 inline-block" alt="payment ilustration" />
                <p className="text-sm">
                Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </p>
            </div>
            <p className="text-4xl mt-12">Your payment has been processed</p>
            <p>You will receive payment voucher and additional instructions in your email.</p>
        </div>
    )
}