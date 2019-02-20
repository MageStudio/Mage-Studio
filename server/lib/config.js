const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const CONFIG_FILE_NAME = '.config.yml';
const ASSETS = 'assets';
const SCENES = 'scenes';
const SCRIPTS = 'src';

class Config {

    static getDefaultLocalConfig() {
        return {
            workspace: '',
            project: '',
            scene: 'BaseScene'
        }
    };

    static getLocalConfig() {
        try {
            const file = fs.readFileSync(path.resolve(CONFIG_FILE_NAME), 'utf8');
            const content = yaml.safeLoad(file);

            return content;
        } catch(e) {
            console.log('[Mage] An error occured reading config file.', e);
            return false;
        }
    };

    static updateLocalConfig(config) {
        try {
            if (config && Object.keys(config).length > 0) {
                const defaultconfig = Config.getDefaultLocalConfig();
                const localconfig = Config.getLocalConfig();
                const newConfig = Object.assign(defaultconfig, localconfig, config);

                const yamlContent = yaml.safeDump(newConfig);
                fs.writeFileSync(path.resolve(CONFIG_FILE_NAME), yamlContent);

                return true;
            } else {
                console.log('[Mage] provided configuration is empty.');
            }
        } catch(e) {
            console.log('[Mage] An error occured writing config file.', e);
            return false;
        }
    }

    static getProjectPath(project) {
        const local = Config.getLocalConfig();
        const projectName = project || local.project;

        return path.join(local.workspace, projectName);
    }

    static getAssetsPath() {
        return path.join(Config.getProjectPath(), ASSETS);
    }

    static getScriptsPath() {
        return path.join(Config.getProjectPath(), SCRIPTS);
    }

    static getScenePath(sceneName) {
        return path.join(
            Config.getProjectPath(),
            SCENES,
            sceneName
        )
    }
}

module.exports = Config;
