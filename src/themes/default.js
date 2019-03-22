'use strict';

export default {
    tree: {
        base: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            color: '#616161',
        },
        node: {
            base: {
                position: 'relative',
                cursor: 'pointer',
                padding: '2px 0',
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                display: 'block'
            },
            activeLink: {
                color: '#007cff',
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    height: '24px',
                    width: '24px',
                    marginLeft: '-16px',
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-14px 0 0 -5px',
                    height: '14px'
                },
                height: 10,
                width: 10,
                arrow: {
                    fill: '#9DA5AB',
                    strokeWidth: 0
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px'
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle'
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '7px'
            },
        }
    }
};

