import { configureStore } from "@reduxjs/toolkit";
import handleListsReducer from "../features/tasks/handleLists";

export const store = configureStore({
    reducer: {
        handleLists: handleListsReducer,
    }
});
