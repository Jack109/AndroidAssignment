import React, { Component } from 'react';
import {
    AppRegistry,
    Modal,
    StyleSheet,
    Text,
    View,
    TextInput,
    DatePickerAndroid,
    TimePickerAndroid,
    TouchableWithoutFeedback,
    Button
} from 'react-native';


Date.prototype.formatted = function () {
    let day = this.getDay();
    let date = this.getDate();
    let month = this.getMonth();
    let year = this.getFullYear();
    let daysText = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthsText = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return `${daysText[day]}, ${monthsText[month]} ${date}, ${year}`;
}
export class SetReminderScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: new Date(),
            dateText: '',
        }
        this.state = {
            title: '',
            hour: null,
            minute: null,
            timeText: '',
        }
        this.state = {
            newValue: '',
            width: 40
        }
    }


    updateSize = (width) => {
        this.setState({
            width
        });
    }
    openDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: this.state.date,
                minDate: new Date(2000, 0, 1),
                maxDate: new Date(2099, 11, 31),
                mode: 'calendar', // try also with `spinner`
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                let selectedDate = new Date(year, month, day);

                this.setState({
                    date: selectedDate,
                    dateText: selectedDate.formatted(),
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
    openTimePicker = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: this.state.hour,
                minute: this.state.minute,
                is24Hour: true,
                mode: 'clock',  // try also with `spinner`
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
                this.setState({
                    hour: hour,
                    minute: minute,
                    timeText: `${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}`,
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    }

    render() {
        const { newValue, width } = this.state;

        let newStyle = {
            width
        }
        return (
            <View style={styles.overall}>
                <Text style={styles.headline}> Add Reminder</Text>
                <View style={styles.container}>
                    <TouchableWithoutFeedback
                        onPress={this.openDatePicker}
                    >
                        <View>
                            <TextInput
                                editable={true}
                                multiline={true}
                                onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.width)}
                                style={styles.input}
                                value={this.state.dateText}
                                placeholder='Event Date'
                                editable={false}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.container}>
                    <TouchableWithoutFeedback
                        onPress={this.openTimePicker}
                    >
                        <View>
                            <TextInput
                                style={styles.input}
                                value={this.state.timeText}
                                placeholder='Event Time'
                                editable={false}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button
                            title="cancel"
                            onPress={this.props.onPress}>
                        </Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="add"
                            onPress={this.props.onPress}>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    overall:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    headline:{
        fontWeight:'bold',
        fontSize:40,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        textAlign: 'center',
        fontSize: 20,
        width: 300,
        height: 100,
        color: 'black',
        borderBottomWidth: 2,
        borderBottomColor: 'green'
    },
    buttonContainer: {
        margin:40,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '40%',
        height: 40,
        margin: 5
    }
});
AppRegistry.registerComponent('AndroidAssignment', () => SetReminderScreen);
