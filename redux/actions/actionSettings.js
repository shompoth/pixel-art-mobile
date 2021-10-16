import { SET_SETTINGS } from "../constant";

export const setCategorySettings = savedSettings => {
    return {
        type: SET_SETTINGS,
        settings: savedSettings,
    };
};
