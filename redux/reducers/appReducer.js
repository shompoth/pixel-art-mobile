import { DATA } from "../../data/usersData";
import { SET_SELECTION } from "../constant";

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

        default:
            return state;
    }
    return state;
};

export default appReducer;
