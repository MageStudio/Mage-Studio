import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';

import Name from './Name';

describe('Name', () => {

    it('should render fine', () => {
        const component = shallow(<Name />);
        expect(toJSON(component)).toMatchSnapshot();
    });

    describe('events', () => {

        it('should call onNameChange when the input changes', () => {
            const spy = sinon.spy();
            const value = 'marco';
            const component = shallow(<Name name={value} onNameChange={spy} />);

            component.find('Input').simulate('change');

            expect(spy.called).toBe(true);
        });
    });
});
