import React from 'react';
import {
    Select,
    Switch,
    Input
} from 'antd';

import { PictureOutlined } from '@ant-design/icons';

import style from '../../../inspector.module.scss';

const mapTexturesToOption = (textures) => {
    return textures.map(texture => <Select.Option key={texture.name}>{texture.name}</Select.Option>)
}

const Material = ({ textures = [], onTextureChange, onMaterialChange }) => (
    <div className={style['inspector-block']}>
        <div className={style['inspector-block-title']}>
            <PictureOutlined height='8px' width='8px' className={style['inspector-block-title-label-icon']}/>
            <span className={style['inspector-block-title-label']}>MATERIAL</span>
        </div>
        <div className={style['inspector-block-values']}>
            <div className={style['inspector-property']}>
                <label className={style['inspector-property-label']}>
                    Material
                </label>
                <Select
                    onChange={onMaterialChange}
                    className='setting-input right'
                    size={'small'}
                    defaultValue='Basic'>
                    <Select.Option key='basic'>Basic</Select.Option>
                    <Select.Option key='lambert'>Lambert</Select.Option>
                    <Select.Option key='phong'>Phong</Select.Option>
                    <Select.Option key='depth'>Depth</Select.Option>
                    <Select.Option key='standard'>Standard</Select.Option>
                </Select>
            </div>
            <div className={style['inspector-property']}>
                <label className={style['inspector-property-label']}>
                    Wireframe
                </label>
                <div className='enabled-toggle'>
                    <span>active</span>
                    <Switch
                        size={"small"} />
                </div>
            </div>
            <div className={style['inspector-property']}>
                <label className={style['inspector-property-label']}>
                    Color
                </label>
                <div className="setting-input right">
                    <Input
                        size="small"
                        placeholder="#ffffff" />
                </div>
            </div>
            <div className={style['inspector-property']}>
                <label className={style['inspector-property-label']}>
                    Texture
                </label>
                <Select
                    onChange={onTextureChange}
                    className='setting-input right'
                    size={'small'}>
                    { mapTexturesToOption(textures) }
                </Select>
            </div>
            <div className={style['inspector-property']}>
                <label className={style['inspector-property-label']}>
                    Normal
                </label>
                <Select
                    className='setting-input right'
                    size={'small'}>
                </Select>
            </div>
        </div>
    </div>
);

export default Material;

// change material type,
// wireframe true/false
// color
// texture
// normal map ?
