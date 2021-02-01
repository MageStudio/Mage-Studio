import React from 'react';
import { Input } from 'antd';

import style from '../../../inspector.module.scss';

export default ({name = '', onNameChange = f => f }) => (
    <div className={style['inspector-property']}>
        <label className={style['inspector-property-label']}>
            Name
        </label>
        <div className={style['inspector-property-value']}>
            <Input
                onChange={onNameChange}
                value={name}
                placeholder="name"/>
        </div>
    </div>
)
