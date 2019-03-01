const PROJECT_NAME_MISSING = { code: 400, text: 'Project name is missing.' };
const SCENE_NAME_MISSING = { code: 400, text: 'Scene name is missing.' };

const WRONG_PROJECT_NAME = { code: 400, text: 'Selected project is unavailable '};

const PROJECT_CREATED = { code: 201, text: ''};
const PROJECT_NOT_CREATED = { code: 204, text: 'Something went wrong when creating the project.' };

const CONFIG_MISSING = { code: 404, text: 'Configuration is unavailable.' };
const CONFIG_AVAILABLE = { code: 200 };

const SCENE_NOT_FOUND = { code: 404, text: 'Scene could not be found.' };
const SCENE_DATA_MISSING = { code: 400, text: 'Scene data is missing.' };

const SCENE_JSON_NOT_CREATED = { code: 204, text: 'Something went wrong when creating the scene.json' };
const SCENE_JSON_CREATED = { code: 201, text: ''};

const SCENE_JSON_READ = { code: 200 };

const FILE_WRITE_SUCCESS = { code: 201 };
const FILE_MISSING = { code: 400, text: 'File is missing.'};
const FILE_WRITE_FAILURE = { code: 204, text: 'Could not write file'};

const MODELS_NOT_FOUND = { code: 404, text: 'Models not found' };
const MODEL_NOT_FOUND = { code: 404, text: 'Model not found' };
const MODEL_NAME_MISSING = { code: 400, text: 'Model name is missing' };

const SCRIPT_NOT_FOUND = { code: 404, text: 'Script not found' };
const SCRIPT_NAME_MISSING = { code: 400, text: 'Script name is missing' };

module.exports = {
    PROJECT_NAME_MISSING: PROJECT_NAME_MISSING,
    SCENE_NAME_MISSING: SCENE_NAME_MISSING,
    PROJECT_CREATED: PROJECT_CREATED,
    CONFIG_MISSING: CONFIG_MISSING,
    CONFIG_AVAILABLE: CONFIG_AVAILABLE,
    PROJECT_NOT_CREATED: PROJECT_NOT_CREATED,
    SCENE_NOT_FOUND: SCENE_NOT_FOUND,
    SCENE_DATA_MISSING: SCENE_DATA_MISSING,
    SCENE_JSON_NOT_CREATED: SCENE_JSON_NOT_CREATED,
    SCENE_JSON_CREATED: SCENE_JSON_CREATED,
    FILE_WRITE_SUCCESS: FILE_WRITE_SUCCESS,
    FILE_WRITE_FAILURE: FILE_WRITE_FAILURE,
    FILE_MISSING: FILE_MISSING,
    WRONG_PROJECT_NAME: WRONG_PROJECT_NAME,
    MODELS_NOT_FOUND: MODELS_NOT_FOUND,
    MODEL_NOT_FOUND: MODEL_NOT_FOUND,
    MODEL_NAME_MISSING: MODEL_NAME_MISSING,
    SCRIPT_NOT_FOUND: SCRIPT_NOT_FOUND,
    SCRIPT_NAME_MISSING: SCRIPT_NAME_MISSING,
    SCENE_JSON_READ: SCENE_JSON_READ
};
