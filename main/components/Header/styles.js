import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        position:'absolute',
        top:50,
        zIndex:100,
        flexDirection:'row',
        display:'flex',
        justifyContent:'flex-end',
        width:'100%',
    },

    logo:{
        width:'50%',
        height:'50%',
        resizeMode: 'contain',
        zIndex:10,
    },

    menu:{
        width:30,
        height:30,
        resizeMode: 'contain',
        position:'absolute',
        right:25,
    }
});

export default styles;