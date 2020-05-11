
import * as WebBrowser from 'expo-web-browser';
import React, { Component } from "react";
import {
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  Platform,
  Animated,
  TouchableOpacity, KeyboardAvoidingView,
  StyleSheet,TextInput,Button
} from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { width, height } = Dimensions.get("window");
const MAP_HEIGHT = height * 0.90;
const CARD_HEIGHT = height - MAP_HEIGHT - 20;
const CARD_WIDTH = 100;
const ACCENT_COLOUR = "#008489";


export default class MapScreen extends Component {
    scrollerRef = null;
  
    state = {
      properties: [
        {
          id: 1,
          title: "Sao Judas Tadeu",
          type: "Chat livre",
          bedCount: 1,
          price: "CHAT",
          rating: 5,
          reviewsCount: 75,
          imageUrl:
            "http://www.chicroomproperties.com/thumb/property-gallery/items/166/furnished-studio-flat-for-rent-mid-term-in-barcelona-gothic-2.jpg",
          coords: {
            latitude: -23.568993,
            longitude: -46.71379
          }
        },
        {
          id: 2,
          title: "Faria Lima",
          type: "Private room",
          bedCount: 1,
          price: "Chatzao",
          rating: 4,
          reviewsCount: 139,
          imageUrl:
            "https://www.designingbuildings.co.uk/w/images/a/a8/xStudioflat.jpg.pagespeed.ic.xN613dZkvW.jpg",
          coords: {
            latitude: -23.567256,
            longitude: -46.693959
          }
        },
        {
          id: 3,
          title: "Pinheiros",
          type: "Entire flat",
          bedCount: 2,
          price: "PinheirosChat",
          rating: 3,
          reviewsCount: 12,
          imageUrl:
            "http://www.chicroomproperties.com/thumb/property-gallery/items/166/furnished-studio-flat-for-rent-mid-term-in-barcelona-gothic-2.jpg",
          coords: {
            latitude: -23.566425,
            longitude: -46.703054
          }
        },
        {
          id: 4,
          title: "Paulista",
          type: "Private room",
          bedCount: 1,
          price: "Chat",
          rating: 2,
          reviewsCount: 255,
          coords: {
            latitude: -23.55858,
            longitude: -46.659353
          }
        },
        {
          id: 5,
          title: "Chat Cachoeirinha",
          type: "Entire home",
          bedCount: 1,
          price: "Chat",
          rating: 5,
          reviewsCount: 75,
          imageUrl:
            "http://www.chicroomproperties.com/thumb/property-gallery/items/166/furnished-studio-flat-for-rent-mid-term-in-barcelona-gothic-2.jpg",
          coords: {
            latitude: -23.4689,
            longitude: -46.663421
          }
        }
      ],
      selectedProperty: 0
    };
  
    componentDidUpdate(prevProps, prevState) {
      if (
        this.scrollerRef &&
        prevState.selectedProperty !== this.state.selectedProperty
      ) {
        this.scrollerRef.scrollTo({
          x: this.state.selectedProperty * CARD_WIDTH,
          y: 0,
          animated: true
        });
      }
    }
  
    render() {
      const { properties, selectedProperty } = this.state;
  
      return (
        // The marginTop here is used to move the map above where the navigation would be
     
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: -23.56,
            longitude: -46.66,
            latitudeDelta: 0.02,
            longitudeDelta: 0.01
          }}
          loadingEnabled
          showsUserLocation
        >
          {properties.map((property, index) => (
            <MapView.Marker key={property.id} coordinate={property.coords}>
              <View
                style={{
                  backgroundColor:
                    selectedProperty === index ? ACCENT_COLOUR : "#FFFFFF",
                  height: 30,
                  width: 45,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: selectedProperty === index ? "#FFFFFF" : "#000000"
                  }}
                >
                  {property.price}
                </Text>
              </View>
            </MapView.Marker>
          ))}
        </MapView>
 
      );
    }
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
