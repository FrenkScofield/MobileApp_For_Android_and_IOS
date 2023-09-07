import React from "react";
import {ScrollView, Image,View} from'react-native';
import styles  from './BannerSlide.stylee';
import news_banner_data  from '../../news_banner_data.json';
import VideoBandl from '../VideoCom'
                                 

const Banner =()=> {
    return(
      <View>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
        {
          news_banner_data.map(bannerNews => <Image 
            style={styles.banner_image}
             source={{uri:bannerNews.imageUrl}} />)
        }
       </ScrollView>
       <VideoBandl/>
      </View>
    )
}

export default Banner;