import * as React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

import Nav from '../../common/Nav';
import SmallCard from '../../common/SmallCard';

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
  align-items: center;
  padding-left: 3rem;
  background-color: ${props => props.theme.colors.WHITE};
  border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
`;
const HeaderText = styled.p`
  ${props => props.theme.typo.p2};
`;
const StyledIframe = styled(Iframe)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.WHITE};
  z-index: 99;
`;
interface P {
  on: boolean;
}
interface Props {
  openNav: () => void;
  selectVisible: (target: string) => void;
  visibleTarget: string;
  isOpenNav: boolean;
  NA: any[];
  europe: any[];
  oceania: any[];
  SA: any[];
  asia: any[];
  africa: any[];
}

export default class extends React.PureComponent<Props> {
  constructor(props) {
    super(props);

    this.siteLists = this.siteLists.bind(this);
    this.showIframe = this.showIframe.bind(this);
  }

  siteLists(category) {
    return category.map((site, i) => (
      <SmallCard
        key={i}
        siteImg={site.siteImg}
        siteName={site.siteName}
        siteUrl={site.siteUrl}
        selectVisible={this.props.selectVisible}
        siteIntro={site.siteIntro}
        siteSort={site.siteSort}
      />
    ));
  }

  showIframe() {
    const { visibleTarget } = this.props;
    if (
      visibleTarget !== '북아메리카' &&
      visibleTarget !== '유럽' &&
      visibleTarget !== '오세아니아' &&
      visibleTarget !== '남아메리카' &&
      visibleTarget !== '아시아' &&
      visibleTarget !== '아프리카'
    ) {
      return (
        <StyledIframe
          url={visibleTarget}
          width="100%"
          height="96vh"
          id="myId"
          className="myClassname"
          position="relative"
          display="initial"
          allowFullScreen
        />
      );
    }
    return false;
  }

  render() {
    const {
      isOpenNav,
      openNav,
      selectVisible,
      visibleTarget,
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
          selectVisible={selectVisible}
        />
        <SitesBox on={isOpenNav}>
          <Header>
            <HeaderText>해외 한인 커뮤니티 ({visibleTarget})</HeaderText>
          </Header>
          <SitesList>
            {this.showIframe()}

            {visibleTarget === '북아메리카' && this.siteLists(NA)}
            {visibleTarget === '유럽' && this.siteLists(europe)}
            {visibleTarget === '오세아니아' && this.siteLists(oceania)}
            {visibleTarget === '남아메리카' && this.siteLists(SA)}
            {visibleTarget === '아시아' && this.siteLists(asia)}
            {visibleTarget === '아프리카' && this.siteLists(africa)}
          </SitesList>
        </SitesBox>
      </Container>
    );
  }
}
