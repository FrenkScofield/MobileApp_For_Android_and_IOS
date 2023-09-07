import { StyleSheet , Dimensions} from "react-native";

export default StyleSheet.create({
container:{
margin:10,
borderRadius:10,
flexDirection:'column ',
},

leftProfuct:{
backgroundColor:'white',
borderRadius:10,
    flexWrap:"wrap",
        display:'flex',
    width:Dimensions.get('window').width / 2.18,
},

image:{
    width:Dimensions.get('window').width / 2.18,
    // height:Dimensions.get('window').height / 4,
    //width:189,
    height:100,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
},

innerContainer:{
padding:5
},

title:{
 fontSize:18,
 fontWeight:'bold',
 color:'black'
},

description:{
marginTop:3
},

autor:{
    fontStyle:'italic',
    fontSize:15,
    color:'#353675',
    textAlign:'right',
    padding:5
    
},

buttonComment:{
borderBottomLeftRadius:10,
backgroundColor:'#ff8485',
flex:1

},
buttonLiked:{
    borderBottomRightRadius:10,
    backgroundColor:'#3396ddf5',
    flex:1,
    borderLeftWidth:1,
    borderColor:'grey'
    
    },
buttonText:{
fontSize:20,
textAlign:'center',
fontWeight:'bold',
color:'white',
padding:2

},
buttonContainer:{
    flex:1,
    flexDirection:'row'
}

})