import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props: P) => (props.on ? '15%' : '3%')};
  height: 100vh;
  background-color: ${props => props.theme.colors.SILVER_GREY_1};
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Transparent = styled.div`
  width: 100%;
  height: 95%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
`;
const Button = styled.div`
  width: 100%;
  height: 4vh;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #bbb;
  cursor: pointer;
`;
const ButtonImg = styled.img`
  width: 2rem;
  height: 2rem;
`;
const CategoryBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    background-color: ${props => props.theme.colors.SILVER_GREY_2};
    cursor: pointer;
  }
`;
const CategoryCircle = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  top: 50%;
  left: ${(props: P) => (props.on ? '10%' : '50%')};
  transform: translate(-50%, -50%);
  transition: all 0.5s;
`;
const CategoryText = styled.p`
  ${props => props.theme.typo.p2};
  color: ${props => props.theme.colors.WHITE};
  opacity: ${(props: P) => (props.on ? '0.9' : '0')};
  transition: all 0.5s;
`;
const Copyright = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props: P) => (props.on ? '0.5' : '0')};
  transition: all 0.3s;
  width: 100%;
  text-align: center;
  ${props => props.theme.typo.p5};
  color: ${props => props.theme.colors.WHITE};
`;
const BlogLink = styled.a`
  color: ${props => props.theme.colors.WHITE};
  transition: all 0.2s;
  &:hover {
    color: ${props => props.theme.colors.SECONDARY};
  }
`;

interface P {
  on: boolean;
}
interface Props {
  naviActions: any;
  openNav: () => void;
  isOpenNav: boolean;
}
interface State {
  category: string[];
}

class Nav extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      category: [
        '북아메리카',
        '유럽',
        '오세아니아',
        '남아메리카',
        '아시아',
        '아프리카'
      ]
    };
  }

  categoryList() {
    const { category } = this.state;
    const { isOpenNav, naviActions } = this.props;
    return category.map((cate, i) => (
      <CategoryBox key={i} onClick={() => naviActions.setLocation(cate)}>
        <CategoryCircle
          src={require('../common/img/circle-double.png')}
          on={isOpenNav}
        />
        <CategoryText on={isOpenNav}>{cate}</CategoryText>
      </CategoryBox>
    ));
  }

  render() {
    const { isOpenNav, openNav } = this.props;
    return (
      <Container on={isOpenNav}>
        {!isOpenNav && <Transparent />}
        <Button onClick={openNav}>
          <ButtonImg src={require('../common/img/menu.png')} />
        </Button>
        {this.categoryList()}
        <Copyright on={isOpenNav}>
          &copy; Copyright by{' '}
          <BlogLink href="https://huurray.github.io/">Huurray</BlogLink>. 2018
        </Copyright>
      </Container>
    );
  }
}

export default Nav;
