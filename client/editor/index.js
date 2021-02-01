import React from 'react';
import {Row} from 'antd';

import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';
import TopToolbar from './toolbars/top';
import BottomToolbar from './toolbars/bottom';
import SceneContainer from './scene/SceneContainer';
import Inspector from './inspector/Inspector';

export default (props) => {
    return (
        <div className="app">
            <Header />
            <TopToolbar/>
            <Row className="main-container">
                <BottomToolbar />
                <div className="canvas-container">
                    <SceneContainer store={props.store}/>
                </div>
                <Inspector />
            </Row>
            <Footer />
        </div>
    );
};
