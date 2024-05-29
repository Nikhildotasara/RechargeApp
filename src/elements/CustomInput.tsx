import React,{useState} from 'react';
import { StyleSheet, TextInput,TouchableOpacity,View } from 'react-native';
import Eye from "../assests/eye.svg"

function CustomInput(props) {
    const { onChange, theme,placeHolder,secure,numeric } = props;
    console.log("theme is ",theme)


    const [secureTextEntry, setSecureTextEntry] = useState(true);


    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
      };

    return (


        <View style={{backgroundColor:"white",borderWidth:0.5,flexDirection:"row",alignItems:"center",borderRadius:8}}>

<TextInput
placeholderTextColor={theme=="dark"?"#00000080":"black"}



secureTextEntry={secureTextEntry}

keyboardType={numeric?"numeric":"default"}

    onChangeText={(text) => { onChange(text) }}
    style={[styles.input, { backgroundColor:theme=="dark"?"#252E3E":"white",paddingLeft:12 ,color:theme=="dark"?"white":"black" }]}
    placeholder={placeHolder}




    
/>

{secure && 

<TouchableOpacity onPress={toggleSecureTextEntry} style={{position:"absolute" ,right:10}}>
    <Eye width={25} height={25}/>
</TouchableOpacity>
}


        </View>


    );
}

const styles = StyleSheet.create({
    input: {
        // borderWidth: 0.5,
        // backgroundColor:theme=="dark"?"#011F3C":"white",
        width: "97%",
        borderRadius: 8,
        fontSize:17
    },
});

export default CustomInput;


// import React,{useState} from 'react';
// import { StyleSheet, TextInput } from 'react-native';
// import Eye from "../assests/eye.svg"

// function CustomInput(props) {
//     const { onChange, theme,placeHolder,secure } = props;
//     console.log("theme is ",theme)


//     const [secureTextEntry, setSecureTextEntry] = useState(true);


//     const toggleSecureTextEntry = () => {
//         setSecureTextEntry(!secureTextEntry);
//       };





//     return (



//         <TextInput
//         placeholderTextColor={theme=="dark"?"#FFFFFF":"black"}

        

//         secureTextEntry={secure}
        
//             onChangeText={(text) => { onChange(text) }}
//             style={[styles.input, { backgroundColor:theme=="dark"?"#252E3E":"white",paddingLeft:12 ,color:theme=="dark"?"white":"black" }]}
//             placeholder={placeHolder}
            
//         />
//     );
// }

// const styles = StyleSheet.create({
//     input: {
//         borderWidth: 0.5,
//         // backgroundColor:theme=="dark"?"#011F3C":"white",
//         width: "95%",
//         borderRadius: 4,
//         fontSize:17
//     },
// });

// export default CustomInput;
