import React from 'react';
import { connect } from 'react-redux';
import R from '../../assets/R';
import OrderView from './OrderView';

const Order = (props) => {
    const {productPaid} = props
    let ListOder = [];
    let TotalOderList=0;
    Object.keys(productPaid.oderList).forEach(function(item){
        TotalOderList+=productPaid.oderList[item].count * productPaid.oderList[item].price;
        ListOder.push(productPaid.oderList[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    const total = Number(TotalOderList).toLocaleString('en-US')
    return (
            <OrderView 
                productPaid = {productPaid}
                total ={total}
                TotalPrice={TotalPrice}
            />
            )
    ;
};

const mapStateToProps = (state) => {
    return {
      productPaid: state.MyCartReaducer,
    };
  };
  
  export default connect(mapStateToProps, {
  })(Order)
