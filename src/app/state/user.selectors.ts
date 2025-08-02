import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUsers = createSelector(selectUserState, state => state.users);
export const selectUserById = (id: number) =>
  createSelector(selectUsers, users => users.find(u => u.id === id));