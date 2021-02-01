import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import sinon from 'sinon';
import { SceneContainer } from './SceneContainer';

const getSceneContainer = (props) => shallow(<SceneContainer scene={{}} {...props} />);

describe('SceneContainer', () => {

    it('should render properly', () => {
        const component = getSceneContainer();

        expect(toJSON(component)).toMatchSnapshot();
    });

    it('should render properly if fullscreen', () => {
       const component = getSceneContainer();

       component.setState({ fullscreen: true });

       expect(toJSON(component)).toMatchSnapshot();
    });

    it('should have state.fullscreen set to false', () => {
        const component = getSceneContainer();

        expect(component.state().fullscreen).toBe(false);
    });

    describe('events', () => {

        it('should call onElementChanged', () => {
            const spy = sinon.spy();
            const component = getSceneContainer({ onElementChanged: spy });

            component.find('Scene').simulate('elementChanged');

            expect(spy.called).toBe(true);
        });

        it('should call onElementAttached', () => {
            const spy = sinon.spy();
            const component = getSceneContainer({ onElementAttached: spy });

            component.find('Scene').simulate('elementAttached');

            expect(spy.called).toBe(true);
        });

        it('should call onElementDetached', () => {
            const spy = sinon.spy();
            const component = getSceneContainer({ onElementDetached: spy });

            component.find('Scene').simulate('elementDetached');

            expect(spy.called).toBe(true);
        });

        it('should call onSceneExported', () => {
            const spy = sinon.spy();
            const component = getSceneContainer({ onSceneExported: spy });

            component.find('Scene').simulate('sceneExported');

            expect(spy.called).toBe(true);
        });
    });
});