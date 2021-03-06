/**
  * desc：
  * author：
  * date： 
  */
import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Home from './Home/Home';
import Discovery from './Discovery/Discovery';
import Cart from './Cart/Cart';
import Mine from './Mine/Mine';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
} from 'react-native';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions:{
                tabBarLabel:'首页',
                tabBarIcon: ({focused,tintColor}) => (
                    <Image
                        source={focused ? require('../Images/tab/tab_home_on.png') : require('../Images/tab/tab_home_off.png')}
                        style={styles.tabBarItem}
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
                        source={focused ? require('../Images/tab/tab_duwu_on.png') : require('../Images/tab/tab_duwu_off.png')}
                        style={styles.tabBarItem}
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
                         source={focused ? require('../Images/tab/tab_cart_on.png') : require('../Images/tab/tab_cart_off.png')}
                         style={styles.tabBarItem}
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
                source={focused ? require('../Images/tab/tab_mine_on.png') : require('../Images/tab/tab_mine_off.png')}
                style={styles.tabBarItem}
                />
            )

            }
        },
    },

    {
        tabBarOptions:{
            // 当前选中的 tab bar 的文本颜色和图标颜色
            activeTintColor:'#81C31F',
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

const StackNavigator = createStackNavigator(
    {
        Tab: {
            screen: TabNavigator,
        },
        // Search:{
        //     screen:SearchScreen,
        // },
        // Category:{
        //     screen:CategoryScreen,
        // }
    },
    {
        headerLayoutPreset:'center',
        navigationOptions:{
            headerTitleStyle:{
            	flex:1,
            	textAlign:'center',
            	alignSelf:'center'
            },
            headerBackImage:(
                <Image
                    source={require('../Images/tab/nav_back_grey.png')}
                    style={{width:44,height:44,marginLeft:15}}
                />
            ),
        }
    }
);

TabNavigator.navigationOptions = ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    let headerTitle = null;
    let headerLeft = null;
    let headerRight = null;
    switch (routeName){
        case 'Home':{
            headerTitle = (
                <View style={styles.search}>
                    <Image source={require('../Images/tab/nav_search.png')} style={{width:15,height:15}}/>
                    <Text style={{color:'#c0c0c0'}}>请输入要搜索的内容 </Text>
                </View>
            )

            break;
        }

        case 'Discovery':{
            headerTitle = '毒物';
            break;
        }

        case 'Cart':{
            headerTitle = '购物车';
            break;
        }

        case 'Mine':{
            headerTitle = '我的';
            break;
        }
    }

    return {
        headerTitle: headerTitle,
        headerLeft: headerLeft,
        headerRight: headerRight,
    }
}



export default StackNavigator;


const styles = StyleSheet.create({
    tabBarItem: {
        width: 20,
        height: 20,
    },
    search: {
        flexDirection:'row',
        backgroundColor:'black',
        width:Dimensions.get('window').width,
        height:40,
        alignItems:'center',
        justifyContent:'center',
    }
});
