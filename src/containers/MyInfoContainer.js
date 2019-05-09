// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import TeamCardsContainer from '../containers/TeamCardsContainer'
import TeammateCardsContainer from '../containers/TeammateCardsContainer'

// Actions
import { showTeamCards } from '../actions/myInfoActions'
import { showTeammateCards } from '../actions/myInfoActions'

class MyInfoContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    if (this.props.showTeamCards) {
      return <TeamCardsContainer showTeammateCards={this.props.showTeammateCards}/>
    } else if (this.props.showTeammateCards) {
      return <TeammateCardsContainer showTeamCards={this.props.showTeamCards}/>
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderComponents()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showTeamCards: state.myInfoReducer.showTeamCards,
    showTeammateCards: state.myInfoReducer.showTeammateCards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showTeamCards: () => dispatch(showTeamCards()),
    showTeammateCards: () => dispatch(showTeammateCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInfoContainer)