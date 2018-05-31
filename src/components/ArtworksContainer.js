import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Artworks from './artworks'
import { focusArtwork } from '../actions/artwork'

const mapStateToProps = state => (
  { artId: state.artId }
)

const mapDispatchToProps = (dispatch) => (
  {
    clicked: bindActionCreators(focusArtwork, dispatch)
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Artworks)
