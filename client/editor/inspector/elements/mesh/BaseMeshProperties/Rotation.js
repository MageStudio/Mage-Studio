import React from 'react';
import classnames from 'classnames';
import { InputNumber } from 'antd';

import { MIN, MAX } from '../constants';

import style from '../../../inspector.module.scss';

const groupClassname = classnames(
    style['inspector-property-value'],
    style['inspector-property-input-group']
);

const inputClassname = classnames(
    style['inspector-property-input'],
    style['small']
);

export default ({x, y, z, onRotationChange = f => f }) => (
    <div className={style['inspector-property']}>
        <label className={style['inspector-property-label']}>
            Rotation
        </label>
        <div className={groupClassname}>
            <div className={inputClassname}>
                <span className={style['inspector-property-input-label']}>x:</span>
                <InputNumber
                    onChange={onRotationChange('x')}
                    min={MIN}
                    max={MAX}
                    defaultValue={x}
                    step={0.1}
                    placeholder="0"
                    value={x} />
            </div>
            <div className={inputClassname}>
                <span className={style['inspector-property-input-label']}>y:</span>
                <InputNumber
                    onChange={onRotationChange('y')}
                    min={MIN}
                    max={MAX}
                    defaultValue={y}
                    step={0.1}
                    placeholder="0"
                    value={y} />
            </div>
            <div className={inputClassname}>
                <span className={style['inspector-property-input-label']}>z:</span>
                <InputNumber
                    onChange={onRotationChange('z')}
                    min={MIN}
                    max={MAX}
                    defaultValue={z}
                    step={0.1}
                    placeholder="0"
                    value={z} />
            </div>
        </div>
    </div>
)
