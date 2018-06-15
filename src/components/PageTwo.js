import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
class PageTwo extends Component {
  static navigationOptions = {
    title: 'Detail',
  };
  render() {
    const { title, 
            artist,
            phone,
            url,
            img,
            descriptions,
            skill
    } = this.props.navigation.state.params;

    const { boldFont } = styles;

    return (
      <ScrollView>

        <Tile
          imageSrc={{uri: img}}
          featured
          title={artist}
          caption={title}
        />



        <Card>
          <Text style={boldFont}>姓名: {artist}</Text>
          <Text style={boldFont}>職稱: {title}</Text>
          <Text style={boldFont}>學歷: {descriptions}</Text>
          <Text style={boldFont}>分機: {phone}</Text>
          <Text style={boldFont}>{'\n'}專長: </Text>
          <Text style={boldFont}>{skill}{'\n'}</Text>
          <Button
            raised
            icon={{
               name: 'arrow-forward',
              }}
              buttonStyle={{
                width: 300,
                height: 45,
                borderRadius: 100,
                backgroundColor: '#ff8c00',
                borderColor: '#ffa07a',
                borderWidth: 1,
                // borderRadius: 10
              }}
          //  backgroundColor='#03A9F4'
            title='More'
            onPress={() => Linking.openURL(url)}
          />
        </Card>
        
      </ScrollView>
    );
  }
}

const styles = {
  boldFont: {
    fontWeight: 'bold'
  }
};


export default PageTwo;