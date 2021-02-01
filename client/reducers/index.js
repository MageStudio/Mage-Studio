import { combineReducers } from 'redux';

import controls from './controls';
import inspector from './inspector';
import scene from './scene';

// import shadows from './shadows';
// import fog from './fog';
// import snap from './snap';
// import rightsidebar from './rightsidebar';
// import projectModal from './projectModal';
// import models from './models';
// import config from './config';
// import project from './project';
// import scripts from './scripts';
// import assets from './assets';
// import textures from './textures';

export default combineReducers({
    controls,
    scene,
    inspector
});
