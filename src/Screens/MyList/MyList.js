import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { toggleHeart } from '../../actions/FavoritesAction';
import R from '../../assets/R';
import MyListView from './MyListView';

const MyList = (props) => {
    const favotiteList = props.FavoriteProduct.favotiteList
    const [selectedFoodType, setSelectedFoodType] = useState(null);
    const OnChangFoodType = (itemFoodType) => {
      setSelectedFoodType(itemFoodType)
    }
    const [modalSeacrh, setModalSearch] = useState(false);
    const [search, setSearch ] = useState('');
    const [filterData,setfilterData] = useState([]);
    const [masterData,setmasterData] = useState ([]);
    useEffect(() => {
            const fetchData = async() =>{
            setmasterData(favotiteList)
            };
            fetchData();
        },[]);
    const serachFilter = (text) => {
        let matches = []
        if(text.length > 0){
          matches = masterData.filter(i => {
            const regax = new RegExp(`${text}`,'gi');
            return i.type.match(regax)
          })
        }
        setfilterData(matches)
        setSearch(text)
        console.log(matches)
    }
  const navigate = useNavigation();
    return (
        <MyListView
          search = {search}
          serachFilter = {serachFilter}
          setSearch = {setSearch}
          filterData = {filterData}
          setfilterData = {setfilterData}
          masterData={masterData}
          setmasterData={setmasterData}
          favotiteList = {favotiteList}
        />
    )
};

const mapStateToProps = (state) => {
  return {
    FavoriteProduct: state.FavoriteReducer,
  };
};

export default connect(mapStateToProps, {
  toggleHeart,
  
})(MyList)
