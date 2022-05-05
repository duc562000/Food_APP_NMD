import React from 'react';
import MyCartView from './MyCartView';
import { connect } from 'react-redux';
import { addCart,increaseItem,decreaseItem,deleteItem } from "../../actions/MyCartAction";
import { CHECK_OUT_SCREEN } from '../../routers/ScreenNames';
import { useNavigation } from '@react-navigation/native';

const MyCart = (props) => {
    const {product,addCart,decreaseItem,deleteItem} = props
    const navigate = useNavigation();
    let ListCart = [];
    let TotalCart=0;
    Object.keys(product.cart).forEach(function(item){
        TotalCart+=product.cart[item].count * product.cart[item].price;
        ListCart.push(product.cart[item]);
    });
    const onPressCheckOut = () => {
        if(product?.cart.length > 0) {
        navigate.navigate(CHECK_OUT_SCREEN,{total})
        }
    }
    const total = Number(TotalCart).toLocaleString('en-US')
    
    console.log(props)
    return (
        <MyCartView
            total={total}
            onPressCheckOut={onPressCheckOut}
            product={product}
            addCart={addCart}
            decreaseItem={decreaseItem}
            deleteItem={deleteItem}
        />
    );
};


const mapStateToProps = (state) => {
    return {
    product: state.MyCartReaducer,
    };
};

export default connect(mapStateToProps, {
addCart,
increaseItem,
decreaseItem,
deleteItem
})(MyCart)
