import React from 'react';
import MyProfileView from './MyProfileView';

const MyProfile = (props) => {
    const dataUser = props.route.params
    return <MyProfileView data={dataUser}/>;
};

export default MyProfile;
