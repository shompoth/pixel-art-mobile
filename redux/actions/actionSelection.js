import { SET_SELECTION } from "../constant";

export const setSelection = id => {
    return {
        type: SET_SELECTION,
        userId: id,
    };
};
