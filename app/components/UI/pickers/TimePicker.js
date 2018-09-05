import React from 'react';
import {View, Text, StyleSheet, DatePickerIOS, TouchableWithoutFeedback} from 'react-native';
import moment from 'moment';

export default class TimePicker extends React.Component {

  state = {
    expanded: false,
    date: new Date()
  }

  handleOnPress = () => {
    const {expanded} = this.state;
    this.setState({
      expanded: !expanded
    });
  }

  handleOnDateChanged = (date) => {
    //fix timezone
    console.log(date);
    if (date >= this.state.date) {
      this.setState({date});
    }else{
      this.setState({date: new Date()});
    }
  }

  renderDatePicker = () => {
    return (
      <View style={{
        marginTop: 20
      }}>
        <DatePickerIOS
          mode='time'
          locale='pl'
          date={this.state.date}
          onDateChange={this.handleOnDateChanged}/>
      </View>
    )
  }

  render() {
    const {expanded} = this.state;
    const date = moment(this.state.date).format('HH:MM');
    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View style={[styles.container, this.props.style]}>

          <View>
            <Text>{date}</Text>
            {expanded && this.renderDatePicker()}
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    minHeight: 40,
    minWidth: 120
  }
});
