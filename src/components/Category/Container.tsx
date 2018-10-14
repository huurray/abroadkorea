import * as React from 'react';
import Presenter from './Presenter';
import * as firebase from 'firebase';

interface Props {
  history: any;
  naviActions: any;
}
interface State {
  count: number;
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  //firebase visitor count
  async componentDidMount() {
    const db = firebase.firestore();
    const storeRef = db.collection('data').doc('count');
    try {
      const doc = await storeRef.get();
      const data = doc.data();
      if (data !== undefined) {
        this.setState({ count: data.count });
        storeRef.set({ count: this.state.count + 1 });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Presenter
        history={this.props.history}
        naviActions={this.props.naviActions}
      />
    );
  }
}
