import React from 'react';
import PaymentSettingView from './PaymentSettingView';

const PaymentSetting = (props) => {
    console.log(props.route.params)
    return <PaymentSettingView dataUser = {props.route.params}/>;
};

export default PaymentSetting;
