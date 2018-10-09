import * as React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const Container = styled.a`
  width: 27rem;
  height: 22rem;
  border: 1px solid #ccc;
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.WHITE};
  margin: 1.5%;
  cursor: pointer;
  position: relative;
`;
const TitleBox = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;
const BackImg = styled.img`
  width: 100%;
  height: 100%;
`;
const CategoryText = styled.div`
  ${props => props.theme.mixins.absoluteCenter};
  ${props => props.theme.typo.h3};
  color: ${props => props.theme.colors.WHITE};
`;
const ContentBox = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  background-color: ${props => props.theme.colors.GREY_LIGHT_2};
`;
const Content = styled.p`
  ${props => props.theme.typo.eh3};
`;

interface Props {
  siteImg: string;
  siteName: string;
  siteUrl: string;
  siteIntro: string;
  siteSort: string;
  history: any;
}

class SmallCard extends React.Component<Props> {
  render() {


    

    return (
      <React.Fragment>
        {this.props.siteUrl === undefined ? (
          <Container>
            <BackImg src={require(`./img/sites/${this.props.siteImg}.jpg`)} />
            <CategoryText>{this.props.siteName}</CategoryText>
          </Container>
        ) : ( 
          <Container
            onClick={() => this.props.history.push(`/sites/${this.props.siteUrl}`)}
            data-tip={this.props.siteIntro}
          >
            <TitleBox>
              <BackImg src={require(`./img/sites/${this.props.siteImg}.jpg`)} />
            </TitleBox>
            <ContentBox>
              <Content>{this.props.siteName}</Content>
              <div>{this.props.siteSort}</div>
            </ContentBox>
            <ReactTooltip place="bottom" type="warning" effect="solid" />
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default SmallCard;
