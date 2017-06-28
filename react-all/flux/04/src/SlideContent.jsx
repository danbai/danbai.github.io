import React, { Component } from 'react';

 class SlideContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activeIndex } = this.props;

        return (
            <div>
                <p className={ activeIndex === '0' ? '' : 'hidden'}>内容一</p>
                <p className={ activeIndex === '1' ? '' : 'hidden'}>内容二</p>
                <p className={ activeIndex === '2' ? '' : 'hidden'}>内容三</p>
            </div>
        );
    }
 }

 export default SlideContent;