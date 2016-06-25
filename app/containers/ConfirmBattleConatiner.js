var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  render(){
    return (
      <ConfirmBattle />
    );
  }
});

module.exports = ConfirmBattleContainer;
