import React, { Component } from 'react';
import { ScrollView,StyleSheet, Text, View, Image } from 'react-native';
import { Tile, List, ListItem, Icon } from 'react-native-elements';
import { MapView } from 'expo';


class PageFive extends Component {

    state = {
       region: {
          longitude: 121.387488,
          latitude: 25.033424,
          longitudeDelta: 0.01,
          latitudeDelta: 0.02
       }
 
    }
 
    static navigationOptions = ({ navigation }) => {
        return {
          drawerLabel: 'Location',
      //    drawerIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
          headerLeft: (
            <Icon
              name='menu'
              iconStyle={{ marginLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          title: 'CGU Location'
        };
      }
 
 
    render() {
       return (
          <View style={{ flex: 1 }}>
             <MapView
                region={this.state.region}
                style={{ flex: 1 }}
                mapType='hybrid'
                showsTraffic
                provider='google'
             />
          </View>
       );
    }
 }
 
 export default PageFive;