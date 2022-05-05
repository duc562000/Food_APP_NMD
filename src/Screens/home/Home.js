import React,{useState} from 'react';
import R from '../../assets/R';
import HomeView from './HomeView'
 export const FoodTypeData = [
  {
    id: 1,
    type:'Drinks',
    img:R.images.imgDrinks,
  },
  {
    id: 2,
    type:'Food',
    img:R.images.iconTurkeyChicken,
    menuFood : [
      {
        id: 1,
        type:'Burgers',
        img:R.images.imgHambergerPng,
        bgColor:R.colors.burger,
      },
      {
        id: 2,
        type:'Pizza',
        img:R.images.imgPizza,
        bgColor:R.colors.pizza
      },
      {
        id: 3,
        type:'BBQ',
        img:R.images.imgBBQ,
        bgColor:R.colors.bbq
      },
      {
        id: 4,
        type:'Fruit',
        img:R.images.imgFruit,
        bgColor:R.colors.fruit
      },
      {
        id: 5,
        type:'Shushi',
        img:R.images.imgShushi,
        bgColor:R.colors.shushi
      },
      {
        id: 6,
        type:'Noodle',
        img:R.images.imgNodddle,
        bgColor:R.colors.noodle
      },
    ],
    menuNearMe:[
      {
        id: 1,
        type:'Lamb Chops Restaurent',
        img:R.images.imgMyy,
        address:'13 Street 47 W 13th St ,NY',
        time:10,
        km:2,
        rate:3.6,
        review:1000,
        open: "7:00 - 21:00",
        food:[
            {
              id: 1,
              type:'Hamberger',
              img:R.images.iconHamberger,
              price:1.98,
              buy:999,
              like:123
            },
            {
              id: 2,
              type:'Tuna Salad',
              img:R.images.imgSotSalad,
              price:2.98,
              buy:999,
              like:123
            },
            {
              id: 3,
              type:'Chicken Fried',
              img:R.images.imgDuiga,
              price:3.98,
              buy:999,
              like:123
            },
            {
              id: 4,
              type:'Spagheti',
              img:R.images.imgMyy,
              price:1.98,
              buy:999,
              like:123
            },
            {
              id: 5,
              type:'Shrimp Pizza',
              img:R.images.imgPizaFull,
              price:1.98,
              buy:999,
              like:123
            },
        ],
        reviewContent:[
          {
            id:1,
            name:"Garnet Bit",
            rate:5,
            avt:R.images.avtNu,
            time:"Yesterday 9:28",
            content:"I'm happy very good very good, understand your problem. There is no good support for nested ScrollViews and FlatLists in RN and your setup must already be spamming you warnings.",
            img1:R.images.imgPizaFull,
            img2:R.images.imgMyy,
            img3:R.images.imgSotSalad,
          },
          {
            id:2,
            name:"Garnet Bit",
            rate:5,
            avt:R.images.avtNam,
            time:"Yesterday 9:28",
            content:"I'm happy very good very good, understand your problem. There is no good support for nested ScrollViews and FlatLists in RN and your setup must already be spamming you warnings.",
            img1:R.images.imgPizaFull,
            img2:R.images.imgMyy,
            img3:R.images.imgSotSalad,
          },
        ],
        infomation:[
          {
            phone:'+1 223432 32',
            email:'lambchops@gmail.com',
            cuisinies:'Italia',
            cost:'$30 - $50'
          }
        ]
        
      },
      {
        id: 2,
        type:'Shrimp Pizza Company',
        img:R.images.imgPizaFull,
        address:'47 Street 47 W 13th St ,NY',
        time:20,
        km:3,
        rate:4.6,
        review:1200,
        open: "7:00 - 21:00",
        food:[
          {
            id: 6,
            type:'Pizza',
            img:R.images.iconHamberger,
            price:1.98,
            buy:888,
            like:123
          },
          {
            id: 7,
            type:'Tuna Salad',
            img:R.images.imgSotSalad,
            price:2.98,
            buy:999,
            like:123
          },
          {
            id: 8,
            type:'Chicken Fried',
            img:R.images.imgDuiga,
            price:3.98,
            buy:999,
            like:123
          },
          {
            id: 9,
            type:'Spagheti',
            img:R.images.imgMyy,
            price:1.98,
            buy:999,
            like:123
          },
          {
            id: 10,
            type:'Shrimp Pizza',
            img:R.images.imgPizaFull,
            price:1.98,
            buy:999,
            like:123
          },
      ],
      reviewContent:[
        {
          id:1,
          name:"Garnet Bitttt",
          rate:5,
          avt:R.images.avtNu,
          time:"Yesterday 9:28",
          content:"I'm happy very good very good, understand your problem. There is no good support for nested ScrollViews and FlatLists in RN and your setup must already be spamming you warnings.",
          img1:R.images.imgPizaFull,
          img2:R.images.imgMyy,
          img3:R.images.imgSotSalad,
        },
        {
          id:2,
          name:"Garnet Bit",
          rate:5,
          avt:R.images.avtNam,
          time:"Yesterday 9:28",
          content:"I'm happy very good very good, understand your problem. There is no good support for nested ScrollViews and FlatLists in RN and your setup must already be spamming you warnings.",
          img1:R.images.imgPizaFull,
          img2:R.images.imgMyy,
          img3:R.images.imgSotSalad,
        },
      ],
      infomation:[
        {
          phone:'+1 223432 32',
          email:'lambchops@gmail.com',
          cuisinies:'Italia',
          cost:'$30 - $50'
        }
      ]
      },
      {
        id: 3,
        type:'Hamberger Restaurent',
        img:R.images.iconHamberger,
        address:'20 Street 77 W 13th St ,NY',
        time:30,
        km:5,
        rate:4,
        review:2000,
        open: "7:00 - 21:00",
        food:[
          {
            id: 11,
            type:'Hamberger',
            img:R.images.iconHamberger,
            price:1.98,
            buy:999,
            like:123
          },
          {
            id: 12,
            type:'Tuna Salad',
            img:R.images.imgSotSalad,
            price:2.98,
            buy:999,
            like:123
          },
          {
            id: 13,
            type:'Chicken Fried',
            img:R.images.imgDuiga,
            price:3.98,
            buy:999,
            like:123
          },
          {
            id: 14,
            type:'Spagheti',
            img:R.images.imgMyy,
            price:1.98,
            buy:999,
            like:123
          },
          {
            id: 15,
            type:'Shrimp Pizza',
            img:R.images.imgPizaFull,
            price:1.98,
            buy:999,
            like:123
          },
      ],
      reviewContent:[
        {
          id:1,
          name:"Garnet Bit",
          rate:5,
          avt:R.images.avtNu,
          time:"Yesterday 9:28",
          content:"I'm happy very good very good, understand your problem. There is no good support for nested ScrollViews and FlatLists in RN and your setup must already be spamming you warnings.",
          img1:R.images.imgPizaFull,
          img2:R.images.imgMyy,
          img3:R.images.imgSotSalad,
        },
        {
          id:2,
          name:"Garnet Bit",
          rate:5,
          avt:R.images.avtNam,
          time:"Yesterday 9:28",
          content:"I'm happy very good very good, understand your problem. There is no good support for nested ScrollViews and FlatLists in RN and your setup must already be spamming you warnings.",
          img1:R.images.imgPizaFull,
          img2:R.images.imgMyy,
          img3:R.images.imgSotSalad,
        },
      ],
      infomation:[
        {
          phone:'+1 223432 32',
          email:'lambchops@gmail.com',
          cuisinies:'Italia',
          cost:'$30 - $50'
        }
      ]
      },
    ],
    menuBreakfast:[
      {
        id: 1,
        type:'Hamberger',
        img:R.images.iconHamberger,
      },
      {
        id: 2,
        type:'Tuna Salad',
        img:R.images.imgSotSalad
      },
      {
        id: 3,
        type:'Chicken Fried',
        img:R.images.imgDuiga
      },
      {
        id: 4,
        type:'Spagheti',
        img:R.images.imgMyy
      },
      {
        id: 5,
        type:'Shrimp Pizza',
        img:R.images.imgPizaFull
      },
      {
        id: 6,
        type:'Hamberger',
        img:R.images.iconHamberger
      },
      {
        id: 7,
        type:'Lamb Chops',
        img:R.images.imgMyy
      },
      {
        id: 8,
        type:'Tuna Salad',
        img:R.images.imgSotSalad
      },
    ]
  },
  {
    id: 3,
    type:'Cake',
    img:R.images.imgCake
  },
  {
    id: 4,
    type:'Snack',
    img:R.images.imgSnack
  }
]

const Home = (props) => {
    
      const [searchQuery, setSearchQuery] = React.useState('');
      const onChangeSearch = query => setSearchQuery(query);
      const [selectedFoodType, setSelectedFoodType] = useState(null);
      const OnChangFoodType = (itemFoodType) => {
        setSelectedFoodType(itemFoodType)
        console.log(itemFoodType);
      }
      
    return (
        <HomeView
            FoodTypeData = {FoodTypeData}
            searchQuery = {searchQuery}
            onChangeSearch = {onChangeSearch}
            selectedFoodType = {selectedFoodType}
            OnChangFoodType = {OnChangFoodType}
        />
    )
};

export default Home;
