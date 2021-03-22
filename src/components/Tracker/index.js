import React, { Component } from 'react';

import ReactGA from 'react-ga';

const Tracker = (WrappedComponent, options = {}) => {
    const trackPage = (page) => {
        ReactGA.set({
            page,
            options
        });
        ReactGA.pageview(page);
    };

    class HOC extends Component {
        componentDidMount(){
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if(currentPage != nextPage){
                trackPage(nextPage);
            }
        }

        render(){
            return <WrappedComponent {...this.props} />;
        }
    }
    return HOC;
};

export default Tracker;