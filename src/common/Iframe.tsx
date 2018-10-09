import * as React from 'react';
import styled from 'styled-components';
import IframeAPI from 'react-iframe';

const StyledIframe = styled(IframeAPI)`
  background-color: ${props => props.theme.colors.WHITE};
  z-index: 99;
`;

interface Props {
  match: any;
}

class Iframe extends React.Component<Props> {
  render() {
    const { match } = this.props;
    const url = `http://${match.params.siteUrl}`;
    
    return (
      <>
        <StyledIframe
          url={url}
          width="100%"
          height="96vh"
          id="myId"
          className="myClassname"
          position="relative"
          display="initial"
          allowFullScreen
        />
      </>
    );
  }
}

export default Iframe;
