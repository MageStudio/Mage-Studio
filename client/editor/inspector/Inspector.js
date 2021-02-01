import React from 'react';
import { Drawer } from 'antd';
import classnames from 'classnames';
import EmptyInspector from './elements/EmptyInspector';
import MeshInspector from './elements/MeshInspector';

import style from './inspector.module.scss';
import { toggleInspectorVisibility } from '../../actions/inspector';
import { connect } from 'react-redux';
import { ENTITY_TYPES } from '../../lib/constants';

class Inspector extends React.Component {

    constructor(props) {
        super(props);
    }

    getContent() {
        const {
            element,
        } = this.props;

        if (element) {
            console.log(element);
            switch (element.getEntityType()) {
                case ENTITY_TYPES.MESH:
                    return <MeshInspector
                        onPositionChange={f => f}
                        onRotationChange={f => f}
                        onScaleChange={f => f}
                        onScriptsMount={f => f}
                        onScriptChange={f => f}
                        onTextureChange={f => f}
                        onMaterialChange={f => f}
                        onNameChange={f => f}
                        position={element.getPosition()}
                        rotation={element.getRotation()}
                        scale={element.getScale()}
                        tags={element.getTags()}
                        name={element.getName()} />
            }
        }

        return <EmptyInspector />
    }

    render() {
        const { visible } = this.props;
        const className = classnames(style['inspector-drawer'], {
            [style['hidden']]: !visible
        });
        return (
            <Drawer
                className={className}
                title={'Inpector'}
                placement={'right'}
                closable={false}
                height={'80vh'}
                width={400}
                mask={false}
                visible={visible}
                getContainer={false}>
                { this.getContent() }
            </Drawer>
        );
    }
}

const mapStateToProps = ({ inspector }) => ({
    visible: inspector.visible,
    element: inspector.element
});

const mapDispatchToProps = (dispatch) => ({
    onInspectorClose: () => dispatch(toggleInspectorVisibility(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(Inspector);
