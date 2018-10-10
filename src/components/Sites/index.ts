import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as naviActions from '../../redux/modules/navi';

import Container from './Container';

const mapStateToProps = state => ({
  selectedLoaction: state.navi.location,
  isSelected: state.navi.isSelected
});

const mapDispatchToProps = (dispatch: any) => ({
  naviActions: bindActionCreators(naviActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
