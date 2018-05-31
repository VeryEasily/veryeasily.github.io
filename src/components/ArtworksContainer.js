import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Artworks from './artworks'

const mapStateToProps = state => (
  { artId: state.artId }
)

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Artworks)
