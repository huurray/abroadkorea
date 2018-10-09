import * as React from 'react';
import styled from 'styled-components';

import Nav from '../../common/Nav';
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
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: ${props => props.theme.colors.WHITE};
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
`;
const HeaderText = styled.p`
  ${props => props.theme.typo.p2};
`;

interface P {
  on: boolean;
}
interface Props {
  naviActions: any;
  selectedLoaction: any;
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
    return category.map((site, i) => (
      <SmallCard
        key={i}
        siteImg={site.siteImg}
        siteName={site.siteName}
        siteUrl={site.siteUrl}
        siteIntro={site.siteIntro}
        siteSort={site.siteSort}
        history={this.props.history}
      />
    ));
  }

  render() {
    const {
      match,
      isOpenNav,
      openNav,
      naviActions,
      selectedLoaction,
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
        />
        <SitesBox on={isOpenNav}>
          <Header>
            <HeaderText>해외 한인 커뮤니티 ({selectedLoaction})</HeaderText>
          </Header>
          <SitesList>
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
              <Iframe match={match} />
            )}
          </SitesList>
        </SitesBox>
      </Container>
    );
  }
}
