import React, { Component } from 'react';
import { ScrollView,StyleSheet, Text, View, Image } from 'react-native';
import { Tile, List, ListItem, Icon } from 'react-native-elements';

class PageZero extends Component {
  
    static navigationOptions = ({ navigation }) => {
      return {
        drawerLabel: 'Introduction',
    //    drawerIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
        headerLeft: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
        title: 'Introduction'
      };
    }
    // componentWillMount() {
    //   this.setState({ me });
    // }

  //   goToPageTwo = () => {
  //     this.props.navigation.navigate('Professor');
  // };
  
    render() {
        return (
            <ScrollView>
               <View style={styles.container}>
                  <Image source={{ uri: 'https://sites.google.com/a/ms2.cshs.kh.edu.tw/registration/_/rsrc/1477669776528/te-shu-xuan-cai/%E9%95%B7%E5%BA%9A%E5%A4%A7%E5%AD%B8%E6%A0%A1%E5%BE%BD%28%E5%8E%BB%E8%83%8C%29.png?height=182&width=200' }}
                         style={{width:300, height:200}}/>         
                  <Text style={styles.im}>{'\n'}資訊管理學系</Text>
                  <Text style={styles.eng}>Department of Information Management{'\n'}</Text>
                  <View>
                  <Text style={styles.textstyle}>{'\n'}系所簡介</Text>
                  <Text style={styles.introcon}>本系注重資訊技術的發展與對社會、企業組織、
                    醫療體系與個人之應用。著重產業趨勢與人文關懷，
                    設計結合理論與實務的專題實作課程、社會關懷、
                    跨院的專業學程，與追求內容與教學方式的創新。
                    強調「資訊科技在管理上的應用」，整合理論與實務，
                    透過校外實習與畢業專題的執行落實學生的實作能力，
                    與輔導學生了解產業動態與趨勢，以培養精通資訊專業的管理人才。
                    {'\n'}•導生關懷→每位導師輔導25名學生
                    {'\n'}•畢業專題→落實學生的實作能力
                    {'\n'}•企業實習→提升實務經驗與技能
                    {'\n'}•個案教學→了解產業動態與趨勢
                    {'\n'}•專屬LAB →優異學習討論環境
                    {'\n'}•設備完善→一流軟硬體教學環境
                    {'\n'}•社會關懷實作→強化人文關懷素養
                    {'\n'}•國際證照→協助考取證照提升競爭力
                    {'\n'}•產學合作→長期與長庚醫院研究合作
                    {'\n'}•資安專業→資訊安全研究與實作智能
                    {'\n'}•學碩一貫→同時取得大學與碩士學位
                    {'\n'}•跨學院學程→強化資訊科技之應用層面與實務
                    {'\n'}•與世界接軌→獲得AACSB國際認證並排名世界大學前300-400
                    {'\n'}•交換學生機制→重視國際交流與交換學生機制
                    {'\n'}•台塑相關企業機會→優秀學生可推薦至台塑相關企業就業
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
      backgroundColor: '#f8f8ff',
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
    }, 
    eng: {
      fontSize: 9,
      fontFamily: 'serif',
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    intro: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor:'#f5f5f5',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    }
  
  });

  export default PageZero;