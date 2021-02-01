import { INSPECTOR_ELEMENT_ATTACHED, INSPECTOR_VISIBILITY_CHANGED } from "../actions/types";
import { ENTITY_TYPES } from "../lib/constants";

const DEFAULT_STATE = {
    visible: false,
    type: ENTITY_TYPES.MESH,
    element: null
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch(action.type) {
        case INSPECTOR_VISIBILITY_CHANGED:
            return {
                ...state,
                visible: action.visible
            };
        case INSPECTOR_ELEMENT_ATTACHED:
            return {
                ...state,
                element: action.element
            };
        default:
            return state;
    }
};