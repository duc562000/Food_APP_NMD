import React from 'react';
import MyProfileView from './MyProfileView';

const MyProfile = (props) => {
    const data = props.route.params
    console.log(data)
    return <MyProfileView data={data}/>;
};

export default MyProfile;
