/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class DiscoveryScreen extends Component {
    static navigationOptions = {
        headerTitle:'毒物',
    };

    render() {
        return (
            <View >
                <Text> 这是毒物界面 </Text>

            </View>
    )
        ;
    }
}

const styles = StyleSheet.create({});
