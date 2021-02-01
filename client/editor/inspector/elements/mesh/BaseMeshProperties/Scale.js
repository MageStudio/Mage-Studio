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

export default ({x, y, z, onScaleChange = f => f }) => (
    <div className={style['inspector-property']}>
        <label className={style['inspector-property-label']}>
            Scale
        </label>
        <div className={groupClassname}>
            <div className={inputClassname}>
                <span className={style['inspector-property-input-label']}>x:</span>
                <InputNumber
                    onChange={onScaleChange('x')}
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
                    onChange={onScaleChange('y')}
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
                    onChange={onScaleChange('z')}
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
