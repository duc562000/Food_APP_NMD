import React from 'react';
import CheckoutView from './CheckoutView';

const Checkout = (props) => {
    return <CheckoutView total={props.route.params.total}/>;
};

export default Checkout;
