import * as React from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase';

const HeaderBox = styled.div`
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
const SuggestBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 30rem;
  height: 70%;
  display: flex;
  margin-right: 1rem;
  opacity: ${(props: P) => (props.on ? '1' : '0')};
  transition: all 0.8s;
`;
const InputButton = styled.div`
  width: 13rem;
  height: 70%;
  display: flex;
  background-color: ${props => props.theme.colors.SILVER_GREY_2};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.div`
  ${props => props.theme.typo.p4};
  color: ${props => props.theme.colors.WHITE};
`;
const SuccessMsg = styled.div`
  ${props => props.theme.typo.p4};
  color: ${props => props.theme.colors.TERTIARY};
  margin-left: 7%;
  opacity: ${(props: P) => (props.on ? '1' : '0')};
  text-align: center;
  transition: all 0.8s;
`;

interface P {
  on: boolean;
}
interface Props {
  selectedLoaction: any;
}
interface State {
  isSuggest: boolean;
  successMsg: boolean;
  inputValue: string;
}

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isSuggest: false,
      successMsg: false,
      inputValue: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onPressEnter = this.onPressEnter.bind(this);
    this.onInsert = this.onInsert.bind(this);
  }

  onChangeText(e) {
    this.setState({ inputValue: e.target.value });
  }

  onPressEnter(e) {
    if (e.key === 'Enter') {
      this.onInsert();
    }
  }

  onInsert() {
    const db = firebase.firestore();
    const storeRef = db.collection('suggest');
    const success = () =>
      this.setState(prevState => ({ successMsg: !prevState.successMsg }));

    storeRef.add({ site: this.state.inputValue });

    this.setState({ isSuggest: false });
    if (this.state.inputValue !== '') {
      success();
      setTimeout(success, 3000);
    }
  }

  render() {
    const { isSuggest, successMsg } = this.state;
    return (
      <HeaderBox>
        <HeaderText>
          해외 한인 커뮤니티 ({this.props.selectedLoaction})
        </HeaderText>
        <SuccessMsg on={successMsg}>
          {this.state.inputValue} 를 추천하셨습니다.
        </SuccessMsg>
        <SuggestBox>
          <Input
            on={isSuggest}
            onChange={this.onChangeText}
            onKeyPress={this.onPressEnter}
          />
          {isSuggest ? (
            <InputButton onClick={this.onInsert}>
              <Text>확인</Text>
            </InputButton>
          ) : (
            <InputButton onClick={() => this.setState({ isSuggest: true })}>
              <Text>싸이트 추천하기</Text>
            </InputButton>
          )}
        </SuggestBox>
      </HeaderBox>
    );
  }
}

export default Header;
