import React from 'react';
import { Tabs } from 'antd';
import {
    InfoCircleOutlined,
    FileTextOutlined,
    BgColorsOutlined,
    SettingOutlined
} from '@ant-design/icons';
import BaseMeshProperties from './mesh/BaseMeshProperties/BaseMeshProperties';
import Material from './mesh/Material/Material';
import Script from './mesh/Scripts/Scripts';

const { TabPane } = Tabs;

class MeshInspector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            position,
            rotation,
            scale,
            tags,
            name,
            onNameChange,
            onPositionChange,
            onRotationChange,
            onScaleChange,
            onScriptsMount,
            onScriptChange,
            onTextureChange,
            onMaterialChange,
            scripts = {},
            assets = {}
        } = this.props;

        const { list } = scripts;
        const { textures } = assets;

        return (
            <Tabs tabPosition={'left'}>
                <TabPane tab={<InfoCircleOutlined />} key="1">
                    <BaseMeshProperties
                        onNameChange={onNameChange}
                        onPositionChange={onPositionChange}
                        onRotationChange={onRotationChange}
                        onScaleChange={onScaleChange}
                        name={name}
                        position={position}
                        rotation={rotation}
                        scale={scale}
                        tags={tags} />
                </TabPane>
                <TabPane tab={<BgColorsOutlined />} key="2">
                    <Material
                        textures={textures}
                        onMaterialChange={onMaterialChange}
                        onTextureChange={onTextureChange}/>
                </TabPane>
                <TabPane tab={<FileTextOutlined />} key="3">
                    <Script
                        list={list}
                        onScriptsMount={onScriptsMount}
                        onScriptChange={onScriptChange} />
                </TabPane>
                <TabPane tab={<SettingOutlined />} key="4">
                    PHYSICS YOOOOO
                </TabPane>
            </Tabs>
        );
    }
}

export default MeshInspector;
