import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/modules/user';
import * as naviActions from '../../redux/modules/navi';

import Container from './Container';

const mapStateToProps = state => ({
  isSignedIn: state.user.isSignedIn,
  user: state.user.data
});

const mapDispatchToProps = (dispatch: any) => ({
  userActions: bindActionCreators(userActions, dispatch),
  naviActions: bindActionCreators(naviActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
