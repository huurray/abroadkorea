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
  selectedLoaction: string;
  isSelected: number;
  naviActions: any;
  history: any;
  match: any;
}
interface State {
  isOpenNav: boolean;
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
      //data
      NA: NADate,
      europe: europeDate,
      oceania: oceaniaDate,
      SA: SADate,
      asia: asiaDate,
      africa: africaDate
    };

    this.openNav = this.openNav.bind(this);
  }

  openNav() {
    this.setState(prevState => ({ isOpenNav: !prevState.isOpenNav }));
  }

  render() {
    const {
      isOpenNav,
      NA,
      europe,
      oceania,
      SA,
      asia,
      africa
    } = this.state;
    
    return (
      <Presenter
        history={this.props.history}
        naviActions={this.props.naviActions}
        selectedLoaction={this.props.selectedLoaction}
        isSelected={this.props.isSelected}
        match={this.props.match}
        openNav={this.openNav}
        isOpenNav={isOpenNav}
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
