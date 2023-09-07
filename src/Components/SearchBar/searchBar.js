import React from "react";
import { TextInput, View } from "react-native";
import styles from './searchBar.style';


const SearchBar = (props) =>{
    return(
        <View style={styles.imputComponent}>
            <TextInput style={styles.inputTextArea} 
            placeholder="Search..."
            onChangeText={props.onSearch}/>
        </View>
    )
}

export default SearchBar;