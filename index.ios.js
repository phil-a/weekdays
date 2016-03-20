// Imports
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
      </View>
    );
  }
});

// Style react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
