export const CONFIG_URL = 'api/config';
export const PROJECTS_URL = 'api/projects';
export const SCENES_URL = 'api/scenes';

export const SCRIPTS_EDITOR_PATH = '/code';

export const ASSETS_TYPES = [
    { code: 'textures', display: 'Texture' },
    { code: 'models', display: 'Model' },
    { code: 'audio', display: 'Audio' },
    { code: 'videos', display: 'Video' },
    { code: 'scripts', display: 'Script' }
];

export const ENTITY_TYPES = {
    MESH: 'MESH',
    LIGHT: 'LIGHT',
    MODEL: 'MODEL',
    SPRITE: 'SPRITE',
    UNKNOWN: 'UNKNOWN'
}; 

export const GLOBAL_SPACE = 'global';
export const LOCAL_SPACE = 'local';

export const AVAILABLE_SPACES = [
    GLOBAL_SPACE,
    LOCAL_SPACE
];

export const TRANSLATE_CONTROL = 'translate';
export const ROTATE_CONTROL = 'rotate';
export const SCALE_CONTROL = 'scale';

export const AVAILABLE_CONTROLS = [
    TRANSLATE_CONTROL,
    ROTATE_CONTROL,
    SCALE_CONTROL
];

export const GREEN = '#8AAD5D';
export const MAIZE_RAYOLA = '#ffce54';
export const ATOMIC_TANGERINE = '#fb9d60';
export const LIGHT_CORAL = '#f76c6c';
export const URANIAN_BLUE = '#a8d0e6';
export const DARK_CORNFLOWER_BLUE = '#374785';
export const SPACE_CADET = '#24305E';
export const OXFORD_BLUE = '#11162C';
export const CHARLESTON_GREEN = '#0B2027';
export const CHARLESTON_GREEN_LIGHTER = '#123440';
export const CHARLESTON_GREEN_DARKER = '#040d10';
export const TEAL_BLUE = '#40798c';
export const GREEN_SHEEN = '#70a9a1';

export const PALETTE = [
    GREEN,
    MAIZE_RAYOLA,
    ATOMIC_TANGERINE,
    LIGHT_CORAL,
    URANIAN_BLUE,
    DARK_CORNFLOWER_BLUE,
    SPACE_CADET,
    OXFORD_BLUE,
    CHARLESTON_GREEN,
    TEAL_BLUE,
    GREEN_SHEEN
];

export const TAG_COLORS = [
    GREEN,
    MAIZE_RAYOLA,
    ATOMIC_TANGERINE,
    LIGHT_CORAL,
    URANIAN_BLUE,
    DARK_CORNFLOWER_BLUE,
    TEAL_BLUE,
    GREEN_SHEEN
]

export const buildUrl = (baseUrl, url) => (`http://${baseUrl}/${url}`);
export const getScenesUrl = (scene) => `${SCENES_URL}/${scene}`;
export const getProjectsUrl = (project) => `${PROJECTS_URL}/${project}`;
export const getAssetsUrl = (project) => `${getProjectsUrl(project)}/assets`;
export const getImagesUrl = (project) => `${getProjectsUrl(project)}/images`;
export const getImageUrl = (project, image) => `${getImagesUrl(project)}/${image}`;

export const MIMETYPES = {
    APPLICATION_JSON: 'application/json'
};
