/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';
import { NavigationActions } from 'react-navigation';

const airbnbLogo = require('../img/airbnb-logo.png');

const navigateToTabsAction = NavigationActions.navigate({
  routeName: 'LoggedIn',
});

export default class LoggedOut extends Component {

  
  static navigationOptions = ({ navigation }) => ({
    //headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LoggedIn')} location="right" color={colors.white} text="Log In" />,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });

  
  static onMoreOptionsPress() {
    alert('More options button pressed');
    const { navigation } = this.props;
    navigation.dispatch(navigateToTabsAction)
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={airbnbLogo}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>
          Welcome to Solar DashBaord.
          </Text>

          <RoundedButton
            text="Continue with DashBoard"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={() => navigation.dispatch(navigateToTabsAction)}
          />
                  
          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={() => navigation.dispatch(navigateToTabsAction)}
          >
            <Text style={styles.moreOptionsButtonText}>
              More options
            </Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue,  
            </Text>
           
            <Text style={styles.termsText}>
              {"I agree to Solar's "}
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Payments Terms of Service
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              ,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Privacy Policy
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              , and
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>
                Nondiscrimination Policy
              </Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>
              .
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
