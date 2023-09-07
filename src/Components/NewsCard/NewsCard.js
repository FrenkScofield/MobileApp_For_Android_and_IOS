import React,{useState} from "react";
import { View,Text,Image,TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import styles from './NewsCard.style';


const NewsCard = ({news, onSelect})=>{ //Sending datas and  selected component

    const [btnfollow, setrBtnfollow]= useState(true)
    const [btnUnfollow, setrBtnUnfollow]= useState(false)
    const [count, setCounter] = useState(0)

    function like(){
        setCounter(count + 1)

        setrBtnfollow(!btnfollow);
        setrBtnUnfollow(!btnUnfollow)
    }

    function unlike(){
        setCounter(count - 1)
        
        setrBtnfollow(!btnfollow);
        setrBtnUnfollow(!btnUnfollow)
          }


    return(
      // When the component was clicked
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style ={styles.container}>
            <View style={styles.leftProfuct}>
            <Image style ={styles.image}  source={{ uri:news.imageUrl}}/>
            <View style={styles.innerContainer}>
            <Text style ={styles.title}>{news.title}</Text>
            <Text style ={styles.description}>{news.description}</Text>
            <Text style ={styles.autor}>{news.carType}</Text>
            </View>
                <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonComment}>
                <Text style={styles.buttonText}>Coment</Text>
            </TouchableOpacity>
            {btnfollow && <TouchableOpacity style={styles.buttonLiked} onPress={like}>
                <Text style={styles.buttonText}>Liked:{count}</Text>
            </TouchableOpacity>}
            {btnUnfollow && <TouchableOpacity style={styles.buttonLiked} onPress={unlike}>
                <Text style={styles.buttonText}>UN-Liked:{count}</Text>
            </TouchableOpacity>}
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}


export default NewsCard;