import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 37rem;
  height: 27rem;
  border: 1px solid #ccc;
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.colors.WHITE};
  margin: 1.5%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
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
  ${props => props.theme.typo.eh1};
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
  render() {
    return (
      <Container
        onClick={() => {
          this.props.naviActions.setLocation(this.props.target);
          this.props.history.replace('/sites');
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
