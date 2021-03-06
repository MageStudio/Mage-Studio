import React from 'react';
import { connect } from 'react-redux';

import { requestSceneJson } from '../../app/actions/scene';
import { saveScript } from '../../app/actions/scripts';

import HelpMenu from './menu/HelpMenu';
import ViewMenu from './menu/ViewMenu';
import FileMenu from './menu/FileMenu';

import Logo from './Logo';
import './header.scss';

export const Header = ({
    isCodeEditor,
    onNewScript,
    onSaveScene,
    onSaveScript,
    scripts,
    config }) => {

    const handleSaveScript = () => {
        const { editor: { filename, code, scriptType } } = scripts;
        const { project } = config;

        onSaveScript(project, filename, code, scriptType);
    };

    return (
        <div className="header">
            <Logo />
            <FileMenu
                isCodeEditor={isCodeEditor}
                onNewScript={onNewScript}
                onSaveScene={onSaveScene}
                onSaveScript={handleSaveScript} />
            <ViewMenu />
            <HelpMenu />
        </div>
    );
};

const mapStateToprops = ({ config, scripts }) => ({
    config,
    scripts
});

const mapDispatchToProps = (dispatch) => ({
    onSaveScene: () => dispatch(requestSceneJson()),
    onSaveScript: (project, filename, code, type) => dispatch(saveScript(project, filename, code, type))
});

export default connect(mapStateToprops, mapDispatchToProps)(Header);
