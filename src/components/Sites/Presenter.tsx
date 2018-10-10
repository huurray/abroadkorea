import * as React from 'react';
import styled from 'styled-components';

//commons
import Nav from '../../common/Nav';
import Header from '../../common/Header';
import SmallCard from '../../common/SmallCard';
import Iframe from '../../common/Iframe';

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const SitesBox = styled.div`
  /* nav width 20% */
  width: ${(props: P) => (props.on ? '85%' : '97%')};
  transition: all 0.5s;
  background-color: ${props => props.theme.colors.GREY_LIGHT_1};
`;
const SitesList = styled.div`
  width: 100%;
  max-height: 96vh;
  height: 96vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  padding: ${(props: P) => props.on && '2rem'};
`;

interface P {
  on: boolean;
}
interface Props {
  naviActions: any;
  selectedLoaction: string;
  url: string;
  isSelected: number;
  history: any;
  match: any;
  openNav: () => void;
  isOpenNav: boolean;
  NA: any[];
  europe: any[];
  oceania: any[];
  SA: any[];
  asia: any[];
  africa: any[];
}

export default class extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.siteLists = this.siteLists.bind(this);
  }

  siteLists(category) {
    // const filter = category.filter(arr => arr.siteSort === '캐나다');
    // console.log(category);

    return category.map((site, i) => (
      <SmallCard
        key={i}
        siteImg={site.siteImg}
        siteName={site.siteName}
        siteUrl={site.siteUrl}
        siteIntro={site.siteIntro}
        siteSort={site.siteSort}
        history={this.props.history}
        naviActions={this.props.naviActions}
      />
    ));
  }

  render() {
    const {
      match,
      history,
      isOpenNav,
      openNav,
      naviActions,
      url,
      selectedLoaction,
      isSelected,
      NA,
      europe,
      oceania,
      SA,
      asia,
      africa
    } = this.props;

    return (
      <Container>
        <Nav
          openNav={openNav}
          isOpenNav={isOpenNav}
          naviActions={naviActions}
          history={history}
          isSelected={isSelected}
        />
        
        <SitesBox on={isOpenNav}>
          <Header selectedLoaction={selectedLoaction} />
          <SitesList on={match.params.siteUrl === undefined}>
            {match.params.siteUrl === undefined ? (
              <>
                {selectedLoaction === '북아메리카' && this.siteLists(NA)}
                {selectedLoaction === '유럽' && this.siteLists(europe)}
                {selectedLoaction === '오세아니아' && this.siteLists(oceania)}
                {selectedLoaction === '남아메리카' && this.siteLists(SA)}
                {selectedLoaction === '아시아' && this.siteLists(asia)}
                {selectedLoaction === '아프리카' && this.siteLists(africa)}
              </>
            ) : (
              <Iframe match={match} url={url} />
            )}
          </SitesList>
        </SitesBox>
      </Container>
    );
  }
}
