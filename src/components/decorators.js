'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {VelocityComponent} from 'velocity-react';
import styled from '@emotion/styled';

const Div = styled('div', {
    shouldForwardProp: prop => ['className', 'children', 'onClick'].indexOf(prop) !== -1
})((({style}) => style));
const Polygon = styled('polygon', {
    shouldForwardProp: prop => ['className', 'children', 'points'].indexOf(prop) !== -1
})((({style}) => style));

const Loading = styled(({ className }) => {
    return <div className={className}>loading...</div>;
})(({ style }) => style);

Loading.propTypes = {
    style: PropTypes.object
};

const Toggle = ({style, onClick}) => {
    const {height, width} = style;
    const midHeight = height * 0.5;
    const points = `0,0 0,${height} ${width},${midHeight}`;

    return (
        <Div style={style.base} onClick={onClick}>
            <Div style={style.wrapper}>
                <svg height={height} width={width}>
                    <Polygon points={points}
                             style={style.arrow}/>
                </svg>
            </Div>
        </Div>
    );
};
Toggle.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired
};

const Header = ({node, style, terminal, onClick}) => {
    return (
        <Div style={style.base} onClick={onClick}>
            <Div style={style.title}>
                <span className={`text-extra-large fa fa-folder-o float-left mr-2 ${terminal ? 'ml-2' : ''}`} /><span style={{wordBreak: 'break-all'}}>{node.name}</span>
            </Div>
        </Div>
    );
};
Header.propTypes = {
    style: PropTypes.object,
    node: PropTypes.object.isRequired,
    terminal: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

class Container extends React.Component {
    render() {
        const {style, decorators, terminal, onClick, node} = this.props;
        return (
            <Div
                 ref={ref => this.clickableRef = ref}
                 style={style.container}>
                {!terminal ? this.renderToggle() : null}

                <decorators.Header node={node}
                                   style={style.header}
                                   terminal={terminal}
                                   onClick={() => onClick(false)} />
            </Div>
        );
    }

    renderToggle() {
        const {animations} = this.props;

        if (!animations) {
            return this.renderToggleDecorator();
        }

        return (
            <VelocityComponent animation={animations.toggle.animation}
                               duration={animations.toggle.duration}
                               ref={ref => this.velocityRef = ref}>
                {this.renderToggleDecorator()}
            </VelocityComponent>
        );
    }

    renderToggleDecorator() {
        const {style, decorators, onClick} = this.props;

        return <decorators.Toggle style={style.toggle} onClick={() => onClick(true)} />;
    }
}
Container.propTypes = {
    style: PropTypes.object.isRequired,
    decorators: PropTypes.object.isRequired,
    terminal: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    animations: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]).isRequired,
    node: PropTypes.object.isRequired
};

export default {
    Loading,
    Toggle,
    Header,
    Container
};
