// Imports
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// Create our componenet
var DayItem = React.createClass({
  render: function() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    );
  }
});

//Style our Component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

//Export
module.exports = DayItem;
