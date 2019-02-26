import { combineReducers } from 'redux';
import controls from './controls';
import shadows from './shadows';
import fog from './fog';
import snap from './snap';
import rightsidebar from './rightsidebar';
import projectModal from './projectModal';
import modelModal from './modelModal';
import scene from './scene';
import config from './config';
import project from './project';
import scripts from './scripts';

export default combineReducers({
    fog,
    shadows,
    controls,
    snap,
    rightsidebar,
    projectModal,
    modelModal,
    scene,
    project,
    scripts,
    config
});
