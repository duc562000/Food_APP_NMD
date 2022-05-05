import React from 'react';
import MyProfileView from './MyProfileView';

const MyProfile = (props) => {
    const data = props.route.params
    return <MyProfileView data={data}/>;
};

export default MyProfile;
