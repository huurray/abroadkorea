import * as React from 'react';
import styled from 'styled-components';
import Card from '../../common/Card';
import ReactAwesomeClock from 'react-awesome-clock';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props: any) => props.theme.colors.GREY_LIGHT_1};
`;
const Ment = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Content = styled.p`
  ${props => props.theme.typo.p3};
  margin: 2rem 0 3rem 0;
  font-weight: 700;
`;
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16rem 7% 10rem 7%;
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
        <Ment>
          <ReactAwesomeClock
            day={false}
            style={{
              color: '#444B55',
              fontSize: 60,
              textShadow: '0 0 5px grey'
            }}
          />
        </Ment>
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
          <Content>
            해외 한인 커뮤니티를 소개합니다. 구인구직, 장터 등 활발한 커뮤니티
            싸이트만 업로드 됩니다.{' '}
          </Content>
        </CardBox>
      </Container>
    );
  }
}
