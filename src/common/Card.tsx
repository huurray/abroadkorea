import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 37rem;
  height: 27rem;
  border: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.WHITE};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin: 1.5%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
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
const ContentBox = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
`;
const Title = styled.h1`
  ${props => props.theme.typo.h1};
  ${props => props.theme.mixins.absoluteCenter};
  width: 100%;
  color: ${props => props.theme.colors.WHITE};
  text-align: center;
`;
const Content = styled.p`
  ${props => props.theme.typo.p3};
`;
const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

interface Props {
  imgURL: string;
  content: string;
  title: string;
  history: any;
  target: string;
  naviActions: any;
}

class Card extends React.Component<Props> {
  changeToNum(target) {
    let num;
    switch (target) {
      case '북아메리카':
        num = 0;
        break;
      case '유럽':
        num = 1;
        break;
      case '오세아니아':
        num = 2;
        break;
      case '남아메리카':
        num = 3;
        break;
      case '아시아':
        num = 4;
        break;
      case '아프리카':
        num = 5;
        break;
    }
    return num;
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.props.naviActions.setLocation(this.props.target);
          this.props.naviActions.setNavSelect(
            this.changeToNum(this.props.target)
          );
          this.props.history.push('/sites');
        }}
      >
        <TitleBox>
          <Title>{this.props.title}</Title>
          <BackImg src={require(`./img/${this.props.imgURL}.jpg`)} />
        </TitleBox>
        <ContentBox>
          <Content>{this.props.content}</Content>
          <Icon src={require('./img/circle-arrow-right.png')} />
        </ContentBox>
      </Container>
    );
  }
}

export default Card;
