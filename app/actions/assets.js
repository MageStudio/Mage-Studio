import {
    ASSETS_LOADING,
    ASSETS_COMPLETED,
    ASSETS_FAILURE
} from './types';

import axios from 'axios';
import { getAssetsUrl } from '../lib/constants';

export const assetsLoading = () => ({
    type: ASSETS_LOADING
});

export const assetsCompleted = ({ data }) => ({
    type: ASSETS_COMPLETED,
    data
});

export const assetsFailure = () => ({
    type: ASSETS_FAILURE
});

export const getAllAssets = (project) => {
    return (dispatch) => {
        const url = getAssetsUrl(project);

        dispatch(assetsLoading());

        axios(url)
            .then(response => {
                dispatch(assetsCompleted(response));
            })
            .catch( () => {
                dispatch(assetsFailure());
            });
    }
};