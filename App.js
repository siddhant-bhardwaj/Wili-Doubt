import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransationScreen from './screens/BookTransationScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component{
  render(){
  return (
    <AppContainer/>

  );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const TabNavigator=createBottomTabNavigator({
  Transation:{screen:BookTransationScreen},
  Search:{screen:SearchScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName===Transation){
return(
  <Image
  source={require('./assets/book.png')}
  styles={{width:40,height:40}}
  />

  
)
      }


else if(routeName===Search){
return(
  <Image
  source={require('./assets/booklogo.jpg')}
  styles={{width:40,height:40}}
  />
)
}

    }
  })
}
);

const AppContainer=createAppContainer(TabNavigator);
