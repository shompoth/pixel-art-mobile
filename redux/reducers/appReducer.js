import { DATA } from "../../data/usersData";
import { SET_SELECTION } from "../constant";
import { SET_SETTINGS } from "../constant";

const initialState = {
    users: DATA,
    selectedUsers: [],
    selectedCategories: DATA,
};

// Reducer

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTION:
            const indexResult = state.selectedUsers.findIndex(
                user => user.id === action.userId,
            );

            if (indexResult >= 0) {
                const newSelectedUsers = [...state.selectedUsers];
                newSelectedUsers.splice(indexResult, 1);
                return { ...state, selectedUsers: newSelectedUsers };
            } else {
                const user = state.users.find(user => user.id === action.userId);
                return { ...state, selectedUsers: state.selectedUsers.concat(user) };
            }

        case SET_SETTINGS:
            const usedSettings = action.settings;

            const arraySelectedUserCategory = state.users.filter(user => {
                if (usedSettings.animals && user.category === "animals") {
                    return true;
                }

                if (usedSettings.travel && user.category === "travel") {
                    return true;
                }

                if (usedSettings.cars && user.category === "cars") {
                    return true;
                }
            });

            return { ...state, selectedCategories: arraySelectedUserCategory };

        default:
            return state;
    }
    return state;
};

export default appReducer;
