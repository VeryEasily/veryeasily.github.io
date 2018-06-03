import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import toggleArtFocus from '../actions/toggleArtFocus'
import Art from './art'
import WindowSizeContext from '../layouts/WindowSizeContext'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    id: ownProps.id,
    active: ownProps.id === (state.artwork && state.artwork.activeId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleArtFocus: bindActionCreators(toggleArtFocus, dispatch)
  }
}

const WindowAwareArt = (props) => (
  <WindowSizeContext.Consumer>
    { window => (
      <Art window={window} {...props} />
    )}
  </WindowSizeContext.Consumer>
)

export default connect(mapStateToProps, mapDispatchToProps)(WindowAwareArt)
