import React from 'react';
import Navbar from "../Navbar";
import styled from "styled-components";
import StyledContentWrapper from "../Styled/StyledContentWrapper";

const StyledPageWrapper = styled.div`
  height: 100vh;
  overflow: hidden;

  & .contentWrapper {
    z-index: 1;
    position: relative;
    height: 100%;
  }
`

const PageWrapper = Component => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {openNav: false}
        }

        render() {
            return (
                <StyledPageWrapper onClick={() => this.setState({openNav: false})}>
                    <Navbar isMain={this.props.isMain || false}
                            openNav={this.state.openNav}
                            setOpenNav={this.setState.bind(this)}/>
                    <div className={"contentWrapper"}>
                        <StyledContentWrapper>
                            <Component {...this.props} />
                        </StyledContentWrapper>
                    </div>
                </StyledPageWrapper>)

        }
    }
}

export default PageWrapper;