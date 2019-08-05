import {
    SCRIPTS_FETCH_FAILED,
    SCRIPTS_FETCH_STARTED,
    SCRIPTS_FETCH_COMPLETED,
    SCRIPTS_SINGLE_FETCH_COMPLETED
} from './types';

import { PROJECTS_URL } from '../lib/constants';
import { getOrCreateApp } from '../scene/AppProxy';
import axios from 'axios';

// fetch scripts
export const scriptsFetchStarted = () => ({
    type: SCRIPTS_FETCH_STARTED
});

export const scriptsFetchCompleted = ({ data = [] }) => ({
    type: SCRIPTS_FETCH_COMPLETED,
    list: data
});

export const scriptsFetchFailed = () => ({
    type: SCRIPTS_FETCH_FAILED
});

export const singleScriptFetchCompleted = (data) => ({
    type: SCRIPTS_SINGLE_FETCH_COMPLETED,
    data
});

export const getScripts = (project) => (dispatch) => {
    const url = `${PROJECTS_URL}/${project}/scripts`;

    dispatch(scriptsFetchStarted());

    axios(url)
        .then((response) => {
            if (!response) {
                dispatch(scriptsFetchFailed());
            } else {
                dispatch(scriptsFetchCompleted(response));
            }
        })
        .catch(() => {
            dispatch(scriptsFetchFailed());
        });
};

export const getScriptContent = (project, scriptid) => axios(getScriptUrl(prohect, scriptid));

export const setScriptContent = (project, scriptid, content) => {
    const url = `${PROJECTS_URL}/${project}/scripts/${scriptid}`;
}

export const loadSingleScript = (project, scriptid) => (dispatch) => {
    dispatch(scriptsFetchStarted());

    getOrCreateApp()
        .then((app) => {
            getScriptContent(project, scriptid)
                .then(({ data }) => {
                    dispatch(singleScriptFetchCompleted(data));
                    app.loadScript(data.content);
                })
                .catch(dispatch(scriptsFetchFailed()));
        });
};


// fetch single script
