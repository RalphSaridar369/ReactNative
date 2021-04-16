import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles.js';

const Header = () =>{
    return(
        <View style={styles.container}>
            <Image style={styles.logo}
             source={require('../../assets/img/tesla.png')} /> 
             <Image style={styles.menu}
              source={require('../../assets/img/menu.png')} /> 
        </View>
    )
}

export default Header;