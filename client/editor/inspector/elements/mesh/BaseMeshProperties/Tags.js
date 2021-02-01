import React from 'react';
import { Tag } from 'antd';
import { TAG_COLORS } from '../../../../../lib/constants';
import style from '../../../inspector.module.scss';

const getRandomTagColor = () => TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)];

const getTag = tag => {
    const color = getRandomTagColor();
    return (
        <Tag
            closable
            color={color}
            style={{ 'border-color': color, color }}>
            {tag}
        </Tag>
    );
};

const Tags = ({ tags = [] }) => {

    return (
        <div className={style['inspector-property']}>
            <label className={style['inspector-property-label']}>
                Tags
            </label>
            <div className={style['inspector-property-box']}>
                { tags.map(getTag) }
            </div>
        </div>
    )
};

export default Tags;