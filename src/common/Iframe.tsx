import * as React from 'react';
import styled from 'styled-components';
import IframeAPI from 'react-iframe';

import Loading from '../common/Loading';

const IframeBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const StyledIframe = styled(IframeAPI)`
  background-color: ${props => props.theme.colors.WHITE};
`;
const AbsoluteBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.WHITE};
  position: absolute;
  top: 0;
`;
const LoadingBox = styled.div`
  ${props => props.theme.mixins.absoluteCenter};
`;

interface Props {
  match: any;
}
interface State {
  isloading: boolean;
}

class Iframe extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isloading: false
    };
  }

  componentDidMount() {
    const offloading = () => this.setState({ isloading: false });
    this.setState({ isloading: true });
    setTimeout(offloading, 2500);
  }

  render() {
    const { match } = this.props;
    const url = `http://${match.params.siteUrl}`;

    return (
      <IframeBox>
        <StyledIframe
          url={url}
          width="100%"
          height="96vh"
          position="relative"
          display="initial"
          allowFullScreen
        />
        {this.state.isloading && (
          <AbsoluteBox>
            <LoadingBox>
              <Loading />
            </LoadingBox>
          </AbsoluteBox>
        )}
      </IframeBox>
    );
  }
}

export default Iframe;
