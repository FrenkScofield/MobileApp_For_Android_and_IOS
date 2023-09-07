import React from "react";
import { View,Text,Dimensions,Switch } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './Video.style'


const SpecialVideo =()=>{
    return(
<View>
      <Text style={styles.videoYotubeText}>
        Video Youtube
      </Text>
     <YoutubePlayer
height={230}
width={Dimensions.get('window').width / 1}
play={false}
videoId={'jYdaQJzcAcw'}
/>
     </View>
    )
}

export default SpecialVideo;