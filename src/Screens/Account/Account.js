import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AccountView from './AccountView';

const Account = (props) => {
  const dataProfile = {
    myProfile:[
      {
        name:'Jack lane',
        phone:'+1 2343434 821',
        email:'jack@daswae.mail',
        address:'9sh West stret New york'
      }
    ]
  }
  return <AccountView dataProfile={dataProfile} />;
};

export default Account;
