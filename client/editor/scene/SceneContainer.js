import React from 'react';
import {
    connect
} from 'react-redux';

import classnames from 'classnames';

// import {
//     meshChanged,
//     meshAttached,
//     meshDetached
// } from '../../actions/currentMesh';

import { elementAttached, toggleInspectorVisibility } from '../../actions/inspector';

import {
    saveScene,
    loadScene,
    startProject,
    stopProject
} from '../../actions/scene';

import Scene from './Scene';
// import Player from './Player';

import style from './scene.module.scss';
// import { showModelUploadModal } from '../../actions/models';

export class SceneContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullscreen: false
        };
    }

    handleFullScreen = (fullscreen) => {
        this.setState({ fullscreen });
    }

    render() {
        const {
            scene,
            store,
            config,
            loadScene,
            onElementChanged,
            onElementAttached,
            onElementDetached,
            onSceneExported,
            startProject,
            showModelModal,
            stopProject
        } = this.props;

        const { fullscreen } = this.state;
        // const { projectPlayerVisible, projectUrl } = scene;

        const className = classnames(style['scene-container'], {
            [style.fullscreen]: fullscreen
        });

        return (
            <div className={className}>
                {/* <Player
                    url={projectUrl}
                    visible={projectPlayerVisible} /> */}
                <Scene
                    fullscreen={fullscreen}
                    config={config}
                    store={store}
                    onSceneLoad={loadScene}
                    onElementChanged={onElementChanged}
                    onElementAttached={onElementAttached}
                    onElementDetached={onElementDetached}
                    onSceneExported={onSceneExported} />
            </div>
        );
    }
}

const mapStateToProps = ({ config, scene }) => ({
    // config,
    // scene
});

const mapDispatchToProps = (dispatch) => ({
    // startProject: project => dispatch(startProject(project)),
    // showModelModal: () => dispatch(showModelUploadModal()),
    // onElementChanged: ({name, position, rotation, scale}) => {
    //     return dispatch(meshChanged(name, position, rotation, scale))
    // },
    onElementAttached: () => dispatch(elementAttached()),
    onElementDetached: () => dispatch(toggleInspectorVisibility(false)),
    // onSceneExported: (name) => ({ data }) => dispatch(saveScene(name, data)),
    // loadScene: (name) => dispatch(loadScene(name)),
    // stopProject: (project) => dispatch(stopProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(SceneContainer);
