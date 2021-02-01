import { getOrCreateApp } from "../editor/scene/AppProxy";
import { INSPECTOR_ELEMENT_ATTACHED, INSPECTOR_VISIBILITY_CHANGED } from "./types";

export const toggleInspectorVisibility = visible => ({
    type: INSPECTOR_VISIBILITY_CHANGED,
    visible
});

export const elementAttached = () => dispatch => {
    dispatch(toggleInspectorVisibility(true));

    getOrCreateApp()
        .then(app => {
            const element = app.getCurrentElement();
            dispatch({
                type: INSPECTOR_ELEMENT_ATTACHED,
                element
            });
        });
}   