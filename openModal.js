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
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.button}
                >
                  <Text style={styles.text}> Show On-Going Task</Text>
                </TouchableOpacity>
              <TouchableOpacity
                  style={styles.button}
                >
                  <Text style={styles.text}> Show Completed Task </Text>
                </TouchableOpacity>
              <TouchableOpacity
                  style={styles.button}
                >
                  <Text style={styles.text}> Show All Task</Text>
                </TouchableOpacity>
              </View>
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    flex:1,
    backgroundColor: 'lightblue',
    padding: 10,
    margin:5,
    width:300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'grey',
  },
  buttonRow: {
    margin: 40,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    height:400,
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'grey',
  },
});
