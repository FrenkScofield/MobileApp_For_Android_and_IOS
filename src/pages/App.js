import React, {useState} from 'react';

import { SafeAreaView, Text,FlatList, StyleSheet,Switch} from 'react-native';
import news_data from '../news_data.json';
 import NewsCard from '../Components/NewsCard';
 import Banner from '../Components/BannerHorizontalSlide';
import SearchBar from '../Components/SearchBar';


const App = ({navigation})=>{

  //Selected event , different page redirect, from page ROUTER
  const handleProductDatail = () =>{
      navigation.navigate('SecondPage')
  }

  //Coming data's take and selected component capture, on select function 
  const renderNews = ({item}) => <NewsCard news={item } onSelect={handleProductDatail}/>

 //Filter by favorite value START 
 //First , with json incoming data, useState we fill variables.
const [carList, setCarList] = useState(news_data);  

//Here Switch's default  value , we take 
const [showFavorites, setShowFavorites] = useState(false); 

//Fhis function ,switch's, value change take and car list making a filter.
function onFavorietesChange(isFavoriteSelectet){
  setShowFavorites(isFavoriteSelectet);
  if(isFavoriteSelectet == true){
     setCarList(carList.filter(c=>c.isFavorite))

  }else{

    setCarList(news_data)
  }
}
 //END

 //This function is searching the data from "news_data" by title name.
//at here, character from outside in coming.
 const handleSearch = text => { 
   //Here is the filtered list property, preparing
  const filtreListCar = news_data.filter(car =>{ 
    //Returns the characters typed inside the input to lowercase.
   const searcedText = text.toLowerCase(); 
   //Converts news_data's title names to lowercase
   const currentTitle = car.title.toLowerCase(); 

   //Here, it determines the data that is equal to the characters written in the input and returns it.
   return currentTitle.indexOf(searcedText) > -1; 

  })
  //If there are no characters, it returns the list itself, all data
  setCarList(filtreListCar); 
}

  return(
    <SafeAreaView style ={styles.mainContainer}>

   <Text style={styles.mainTitle}>Brend Car Informatrion</Text>
  
   <SearchBar  onSearch={handleSearch}/>

<Switch value={showFavorites} onValueChange={onFavorietesChange}/>

    <FlatList 
    ListHeaderComponent={()=>(<Banner/>)}
    data={carList}  //pulls datas
    renderItem={renderNews} //make a render, components
    numColumns={2}  //make car cardes side by side 
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'grey',
  },

  mainTitle:{
    fontSize:35,
    fontWeight:'bold',
    marginBottom:5,
    marginTop:5,
    paddingLeft:10,
    color:'lightblue'
  }
})


export default App;