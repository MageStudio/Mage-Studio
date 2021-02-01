import React from 'react';
import { InputNumber } from 'antd';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';

import Position from './Position';

describe('Position', () => {

    it('should render fine', () => {
        const component = shallow(<Position />);
        expect(toJSON(component)).toMatchSnapshot();
    });

    describe('events', () => {

        it('should call onPositionChange when the X field changes', () => {
            const spy = sinon.spy();
            const position = { x: 0, y: 0, z: 0 };
            const onPositionChange = axis => () => spy(axis);

            const component = shallow(<Position { ...position } onPositionChange={onPositionChange} />);

            component.find(InputNumber).at(0).simulate('change');

            expect(spy.called).toBe(true);
        });

        it('should call onPositionChange when the Y field changes', () => {
            const spy = sinon.spy();
            const position = { x: 0, y: 0, z: 0 };
            const onPositionChange = axis => () => spy(axis);

            const component = shallow(<Position { ...position } onPositionChange={onPositionChange} />);

            component.find(InputNumber).at(1).simulate('change');

            expect(spy.called).toBe(true);
        });

        it('should call onPositionChange when the Z field changes', () => {
            const spy = sinon.spy();
            const position = { x: 0, y: 0, z: 0 };
            const onPositionChange = axis => () => spy(axis);

            const component = shallow(<Position { ...position } onPositionChange={onPositionChange} />);

            component.find(InputNumber).at(2).simulate('change');

            expect(spy.called).toBe(true);
        });
    });
});
