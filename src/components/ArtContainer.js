import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import toggleArtFocus from '../actions/toggleArtFocus'
import Art from './art'

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

export default connect(mapStateToProps, mapDispatchToProps)(Art)
