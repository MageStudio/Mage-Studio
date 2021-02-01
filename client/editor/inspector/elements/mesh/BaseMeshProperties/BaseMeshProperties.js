import React from 'react';

import { CodeSandboxOutlined } from '@ant-design/icons';

import Position from './Position';
import Rotation from './Rotation';
import Scale from './Scale';
import Name from './Name';
import Tags from './Tags';

import style from '../../../inspector.module.scss';

const BaseMeshProperties = (props) => {

        const {
            position = {},
            rotation = {},
            scale = {},
            tags = [],
            name,
            onNameChange,
            onPositionChange,
            onRotationChange,
            onScaleChange
        } = props;

        return (
            <div className={style['inspector-block']}>
                <div className={style['inspector-block-title']}>
                    <CodeSandboxOutlined height='8px' width='8px' className={style['inspector-block-title-label-icon']}/>
                    <span className={style['inspector-block-title-label']}>MESH</span>
                </div>
                <div className={style['inspector-block-values']}>
                    <Name
                        name={name}
                        onNameChange={onNameChange}
                    />
                    <Position
                        onPositionChange={onPositionChange}
                        x={position.x}
                        y={position.y}
                        z={position.z}
                    />
                    <Rotation
                        onRotationChange={onRotationChange}
                        x={rotation.x}
                        y={rotation.y}
                        z={rotation.z}
                    />
                    <Scale
                        onScaleChange={onScaleChange}
                        x={scale.x}
                        y={scale.y}
                        z={scale.z}
                    />
                    <Tags tags={tags} />
                </div>
            </div>
    )
};

export default BaseMeshProperties;
