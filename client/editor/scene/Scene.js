import React from 'react';
import debounce from '../../lib/debounce';
import { getOrCreateApp } from './AppProxy';

import style from './scene.module.scss';

export class Scene extends React.Component {

    constructor(props) {
        super(props);

        this.app = {};
    }

    componentDidMount() {
        const { store, onMeshChanged, onElementAttached, onElementDetached, onSceneExported, config, onSceneLoad } = this.props;

        getOrCreateApp()
            .then(app => {
                this.app = app;
                // this.app.addEventListener('elementChanged', debounce(onMeshChanged, 15));
                this.app.addEventListener('elementAttached', onElementAttached);
                this.app.addEventListener('elementDetached', onElementDetached);
            });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.fullscreen !== this.props.fullscreen && this.app) {
            this.app.onResize();
        }
    }

    render() {
        return <div
            id="gameContainer"
            className={style.gameContainer}
            tabIndex={0}></div>
    }
}

export default Scene;
