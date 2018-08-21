/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text, TouchableOpacity,
  View
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { FloatingAction } from 'react-native-floating-action';
import Modal from "react-native-modal";

const actions = [{
  text: 'Edit',
  color: '#c80000',
  icon: require('./images/baseline_add_white_18dp.png'),
  name: 'edit',
  position: 2
}, {
  text: 'Filter',
  color: '#c80000',
  icon: require('./images/sorting-options.png'),
  name: 'delete',
  position: 1
}];

var radio_props = [
  { label: 'ON Going', value: 0 },
  { label: 'COMPLETE', value: 1 },
  { label: '  all   ', value: 2 },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      visibleModal: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>HI</Text>
       
        <FloatingAction
          actions={actions}
          color={'#a80000'}
          floatingIcon={(
            <Image
              source={require('./images/baseline_edit_white_18dp.png')}
            />
          )}
          onPressItem={(name) => {
            switch (name) {
              case 'edit':

                break;

              case 'delete':
                this.setState({ visibleModal: 1 });
                break;
            }
          }
          }
        />

        {!this.state.visibleModal ? null :
        <Modal
        isVisible={this.state.visibleModal === 1}
        onBackdropPress={() => this.setState({ visibleModal: null })}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
      >
        <View style={styles.modalContent}>
          <RadioForm
          style={{ alignItems: 'flex-start' }}
            radio_props={radio_props}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            onPress={(value) => { this.setState({ value: value }) }}
          />
          <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
            <View style={styles.button}>
              <Text style={styles.buttonText} >Close</Text>
            </View>
          </TouchableOpacity>
        </View>

      </Modal>
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonText:{
    
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});