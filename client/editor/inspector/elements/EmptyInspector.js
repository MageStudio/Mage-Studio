import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import style from '../inspector.module.scss';

const EmptyInspector = () => (
    <div className={style['inspector-empty']}>
        <p>
            <SearchOutlined height='64px' width='64px' className={style['inspector-empty-icon']} type="search" />
            Please select an element from the Scene, Hierarchy or Assets box.
        </p>
    </div>
);

export default EmptyInspector;
