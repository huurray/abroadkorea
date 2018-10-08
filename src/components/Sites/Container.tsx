import * as React from 'react';
import Presenter from './Presenter';

//data
import NADate from './data/NA';
import europeDate from './data/europe';
import oceaniaDate from './data/oceania';
import SADate from './data/SA';
import asiaDate from './data/asia';
import africaDate from './data/africa';

interface Props {
  firstTarget: string;
}
interface State {
  isOpenNav: boolean;
  visibleTarget: string;
  NA: any[];
  europe: any[];
  oceania: any[];
  SA: any[];
  asia: any[];
  africa: any[];
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isOpenNav: false,
      visibleTarget: '',
      //data
      NA: NADate,
      europe: europeDate,
      oceania: oceaniaDate,
      SA: SADate,
      asia: asiaDate,
      africa: africaDate
    };

    this.openNav = this.openNav.bind(this);
    this.selectVisible = this.selectVisible.bind(this);
  }

  openNav() {
    this.setState(prevState => ({ isOpenNav: !prevState.isOpenNav }));
  }

  selectVisible(target) {
    this.setState({ visibleTarget: target });
  }

  componentDidMount() {
    this.setState({ visibleTarget: this.props.firstTarget });
  }

  render() {
    const {
      isOpenNav,
      visibleTarget,
      NA,
      europe,
      oceania,
      SA,
      asia,
      africa
    } = this.state;
    return (
      <Presenter
        openNav={this.openNav}
        isOpenNav={isOpenNav}
        selectVisible={this.selectVisible}
        visibleTarget={visibleTarget}
        NA={NA}
        europe={europe}
        oceania={oceania}
        SA={SA}
        asia={asia}
        africa={africa}
      />
    );
  }
}
