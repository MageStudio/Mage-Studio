import React from 'react';
import { InputNumber } from 'antd';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';

import Rotation from './Rotation';

describe('Rotation', () => {

    it('should render fine', () => {
        const component = shallow(<Rotation />);
        expect(toJSON(component)).toMatchSnapshot();
    });

    describe('events', () => {

        it('should call onRotationChange when the X field changes', () => {
            const spy = sinon.spy();
            const position = { x: 0, y: 0, z: 0 };
            const onRotationChange = axis => () => spy(axis);

            const component = shallow(<Rotation { ...position } onRotationChange={onRotationChange} />);

            component.find(InputNumber).at(0).simulate('change');

            expect(spy.called).toBe(true);
        });

        it('should call onRotationChange when the Y field changes', () => {
            const spy = sinon.spy();
            const position = { x: 0, y: 0, z: 0 };
            const onRotationChange = axis => () => spy(axis);

            const component = shallow(<Rotation { ...position } onRotationChange={onRotationChange} />);

            component.find(InputNumber).at(1).simulate('change');

            expect(spy.called).toBe(true);
        });

        it('should call onRotationChange when the Z field changes', () => {
            const spy = sinon.spy();
            const position = { x: 0, y: 0, z: 0 };
            const onRotationChange = axis => () => spy(axis);

            const component = shallow(<Rotation { ...position } onRotationChange={onRotationChange} />);

            component.find(InputNumber).at(2).simulate('change');

            expect(spy.called).toBe(true);
        });
    });
});
