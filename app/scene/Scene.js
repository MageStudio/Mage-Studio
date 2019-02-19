import React from 'react';
import debounce from '../lib/debounce';
import './scene.scss';
import { getOrCreateApp } from './AppProxy';

export class Scene extends React.Component {

    constructor(props) {
        super(props);

        this.app = {};
    }

    async componentDidMount() {
        const { store, onMeshChanged, onMeshAttached, onMeshDetached, onSceneExported, config } = this.props;

        this.app = await getOrCreateApp();

        this.app.setStore(store);

        this.app.addEventListener('meshChanged', debounce(onMeshChanged, 15));
        this.app.addEventListener('meshAttached', onMeshAttached);
        this.app.addEventListener('meshDetached', onMeshDetached);
        this.app.addEventListener('sceneExported', onSceneExported(config.scene));
    }

    render() {
        return <div id="gameContainer" tabIndex={0}></div>
    }
}

export default Scene;
