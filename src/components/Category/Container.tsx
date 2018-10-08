import * as React from 'react';
import Presenter from './Presenter';

interface Props {
  history: any;
  naviActions: any;
}

export default class extends React.Component<Props> {
  render() {
    
    return (
      <Presenter
        history={this.props.history}
        naviActions={this.props.naviActions}
      />
    );
  }
}
