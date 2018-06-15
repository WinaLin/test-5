import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import React from 'react';
import { ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageZero from './components/PageZero';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';




const StackRouter = createStackNavigator({
  Professors:  PageOne,
  Details:  PageTwo,
},
{
  navigationOptions : ({ navigation }) => {
    const { routeName, params } = navigation.state;
    let titleName;
    if (routeName === 'Professors') {
      titleName = `Professors`;
    } else if (routeName === 'Details') {
      titleName = params.artist;
    }     

    return {
      title: titleName,
    }
  }
} 
);

const PageZeroStack = createStackNavigator({
  Intorduction: PageZero
});
const PageFourStack = createStackNavigator({
  Environment: PageFour
});
const PageFiveStack = createStackNavigator({
  Location: PageFive
});

export const DrawerRouter = createDrawerNavigator(
  {
    Introduction: {
      screen: PageZeroStack,
    },
    Professors: {
      screen: StackRouter,
    },
    Environment:{
      screen: PageFourStack,
    },
    Location:{
      screen: PageFiveStack,
    }
  },
  {
    initialRouteName: 'Introduction',
    contentOptions: {
      activeTintColor: '#ff8c00',
      labelStyle: { fontSize: 15 }
    },
    // drawerWidth: 200,
    // drawerPosition: 'right',
    contentComponent:
      props => (
        <ScrollView>
          <Tile
            imageSrc={require('./assets/CGU_Logo.png')}
            featured
            style={{width:20, height:20}}
            imageContainerStyle={{width:200,height:330}}
          />
          <DrawerItems {...props} />
        </ScrollView>
      )
  }
);