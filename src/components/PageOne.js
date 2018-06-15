import React, { Component } from 'react';
import { ScrollView,Text } from 'react-native';
import { List, ListItem,Icon } from 'react-native-elements';


import professors from '../json/professors.json';

class PageOne extends Component {
    state = { professors: [] };
  
    static navigationOptions = ({ navigation }) => {
      return {
        drawerLabel: 'Professors',
      //  drawerIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
        headerLeft: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }
    };  

    componentWillMount() {
        this.setState({ professors });
      //  console.log(this.state);
      }

     goToPageTwo = (professor) => {
        this.props.navigation.navigate('Details', { ...professor });
    };

    render() {
        return (
          <ScrollView>
            <List>
              {this.state.professors.map((professor) => (
                <ListItem
                  key={professor.artist}
                  roundAvatar
                  avatar={{uri: professor.img} }
                  title={professor.artist}
                  titleStyle={{ color: '#000000',fontWeight: 'bold' }}
                  subtitleStyle={{ color: '#dcdcdc' }}
                  subtitle={professor.title}
                  onPress={() => this.goToPageTwo(professor)}
                  // hideChevron
                  // rightTitle='More...'
                />
              ))}
            </List>
          </ScrollView>
        );
      }
    }
    
    export default PageOne;
