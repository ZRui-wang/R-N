/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation'
import {Home} from './Pages/Home';
import {Discovery} from './pages/Discovery';
import {Cart} from './pages/Cart';
import {Mine} from './pages/Mine';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

export const TabNav = TabNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon: ({focused,tintColor}) => (
                    <Image
                        source={focused ? require('../Images/tab/tab_home_on.png') : require('../Images/tab/tab_home_off.png')}
                    />
                )

            }
        },

        Discovery: {
            screen:Discovery,
                navigationOptions:{
                tabBarLabel:'读物',
                    tabBarIcon: ({focused,tintColor}) => (
                    <Image
                source={focused ? require('../Images/tab/tab_home_on.png') : require('../Images/tab/tab_home_off.png')}
                />
            )

            }
        },
        Cart: {
            screen:Cart,
                navigationOptions:{
                tabBarLabel:'购物车',
                    tabBarIcon: ({focused,tintColor}) => (
                    <Image
                source={focused ? require('../Images/tab/tab_home_on.png') : require('../Images/tab/tab_home_off.png')}
                />
            )

            }
        },
        Mine: {
            screen:Mine,
                navigationOptions:{
                tabBarLabel:'我的',
                    tabBarIcon: ({focused,tintColor}) => (
                    <Image
                source={focused ? require('../Images/tab/tab_home_on.png') : require('../Images/tab/tab_home_off.png')}
                />
            )

            }
        }
    },

    {
        tabBarOptions:{
            // 当前选中的 tab bar 的文本颜色和图标颜色
            activeTintColor:'#4BC1D2',
            // 当前未选中的 tab bar 的文本颜色和图标颜色
            inactiveTintColor: '#000',
            // 是否显示tab bar的图标， 默认是false
            showIcon:true,
            // 是否显示tab bar的文本， 默认是true
            showLabel:true,
            upperCaseLabel:false,
            pressColor:'#788493',
            pressOpacity:0.8,
            // tab bar的样式
            styles:{
                backgroundColor:'#fff',
                paddingBottom:1,
                borderTopWidth:0.2,
                paddingTop:1,
                borderTopColor:'#ccc',
            },

            labelStyle:{
                fontSize:11,
                margin:1
            },

            // tab 页面指示符的样式 （tab页面下的一条线）
            indicatorStyle:{
                height:0
            },
        },
        // tab bar的位置， 可选值 'top' or 'bottom'
        tabBarPosition:'bottom',
        // 是否允许滑动切换tab页面
        swipeEnabled:true,
        // 在切换tab页时使用动画
        animationEnabled:false,
        // 是否懒加载
        lazy:true,
        // 返回按钮是否会导致tab切换到初始tab页？如果是， 则设置为initialRoute, 否则为none,
        backBehavior:'none',
    }
);

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    render() {
        return (
            < View >


            < /View>
    )
        ;
    }
}

const styles = StyleSheet.create({});
