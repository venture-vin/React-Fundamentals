var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    console.log('getInitialState')
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentWillMount(){
    console.log('componentWillMount')
  },
  componentDidMount(){
   var query = this.props.location.query;
  //  console.log('QUERY', query);
    console.log('componentDidMount')
 },

  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps')
  },

  componentWillUnmount(){
    console.log('componentWillUnmount')
  },
  render(){
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
