import React from 'react';
import Navbar from "../Navbar";

const PageWrapper = Component => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {openNav: false}
        }

        render() {
            return (<div onClick={() => this.setState({openNav: false})}>
                <Navbar isMain={this.props.isMain || false}
                        openNav={this.state.openNav}
                        setOpenNav={this.setState.bind(this)}/>
                <Component {...this.props} />
            </div>)

        }
    }
}

export default PageWrapper;