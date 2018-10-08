import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = state => ({
  firstTarget: state.navi.target
});

export default connect(
  mapStateToProps
)(Container);
