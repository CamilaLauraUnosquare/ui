import { configureStore } from "@reduxjs/toolkit";
//import { authSlice } from "./auth";
import { appSlice } from "./app";
import { vacanteSlice } from "./vacante";
import { postulantesSlice } from "./postulante";
import { authSlice } from "./auth";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,
    vacantes: vacanteSlice.reducer,
    postulantes: postulantesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
