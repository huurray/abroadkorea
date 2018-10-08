import * as React from 'react';
import styled from 'styled-components';
import Card from '../../common/Card';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props: any) => props.theme.colors.GREY_LIGHT_1};
`;
const Title = styled.h1`
  ${props => props.theme.typo.eh1};
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20rem 7% 20rem 7%;
`;
interface Props {
  history: any;
  naviActions: any;
}

export default class extends React.PureComponent<Props> {
  render() {
    const { history, naviActions } = this.props;
    return (
      <Container>
        <Title>ABROAD KOREA</Title>
        <CardBox>
          <Card
            imgURL="NA"
            title="North America"
            content="북미의 한인 커뮤니티 보기"
            target="북아메리카"
            history={history}
            naviActions={naviActions}
          />
          <Card
            imgURL="europe"
            title="Europe"
            content="유럽의 한인 커뮤니티 보기"
            target="유럽"
            history={history}
            naviActions={naviActions}
          />
          <Card
            imgURL="oceania"
            title="Oceania"
            content="오세아니아의 한인 커뮤니티 보기"
            target="오세아니아"
            history={history}
            naviActions={naviActions}
          />
          <Card
            imgURL="SA"
            title="South America"
            content="남미의 한인 커뮤니티 보기"
            target="남아메리카"
            history={history}
            naviActions={naviActions}
          />
          <Card
            imgURL="asia"
            title="Asia"
            content="아시아의 한인 커뮤니티 보기"
            target="아시아"
            history={history}
            naviActions={naviActions}
          />
          <Card
            imgURL="africa"
            title="Africa"
            content="아프리카의 한인 커뮤니티 보기"
            target="아프리카"
            history={history}
            naviActions={naviActions}
          />
        </CardBox>
      </Container>
    );
  }
}
