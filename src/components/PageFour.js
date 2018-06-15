import React, { Component } from 'react';
import { ScrollView,StyleSheet, Text, View, Image } from 'react-native';
import { Tile, List, ListItem, Icon } from 'react-native-elements';


class PageFour extends Component {
  
    static navigationOptions = ({ navigation }) => {
      return {
        drawerLabel: 'Environment',
    //    drawerIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
        headerLeft: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        title: 'Environment'
      };
    }
    // componentWillMount() {
    //   this.setState({ me });
    // }
  
    render() {
        return (
            <ScrollView>
               <View style={styles.container}>    
                  <Text style={styles.im}>教學環境</Text>   
                  <View>
                  <Text style={styles.textstyle}>{'\n'}環境空間：</Text>
                  <Text style={styles.introcon}>
                  資訊管理學系位於管理大樓五樓，設有系辦行政區、教師研究室、
                  電腦教室一間、研究教室三間，以及依教師專長規劃之資訊安全、
                  生醫資訊、管理科學與工程、資訊行為四項不同領域實驗室。
                  </Text>
                  <Text style={styles.textstyle}>{'\n'}軟硬體設備：</Text>
                  <Text style={styles.introcon}>
                  研究教室具有基本的教學設備，如：筆記型電腦、固定室單槍投影機及麥克風廣播系統；
                  電腦教室是個可容納60人的教學環境，教室內60台電腦於106年8月全面汰舊換新，
                  提供系上教師及學碩學生優良的學習及研究環境。基本教學設備外，各實驗室亦依照授課課程需求
                  ，每年添購所需之軟、硬體設備，如：Amos統計軟體、數據分析套裝軟體、行為觀察分析軟體、
                  數位鑑識教學系統、Flexsim物件導向模擬軟體、RFID生理資訊教學設備、Zenbo機器人…等。
                  此外，五樓的整體環境均委託資訊中心架設無線網路，提供師生在此場域皆有便利的無線網路可以使用。
                  </Text>
                  </View>
                  </View>
            </ScrollView>
          );
         }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 40,
    //  justifyContent: 'center',
    //  backgroundColor: '#ffefd5',
    },
    introcon:{
      marginLeft:4,
      marginRight:4,
      textAlign: 'left',
    },
    textstyle: {
      fontSize: 18,
      fontFamily: 'serif',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      alignItems: 'center',
    },
    im:{
        fontSize: 36,
        fontFamily: 'serif',
        fontWeight: 'bold',
        alignItems: 'center',
      }

  
  });

  export default PageFour;