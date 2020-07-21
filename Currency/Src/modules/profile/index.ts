import { Module } from "vuex";
import { getters } from "Modules/profile/getters";
import { actions } from "Modules/profile/actions";
import { mutations } from "Modules/profile/mutations";
import { IProfileState, IRootState } from "Interfaces/profile/types";

export const state: IProfileState = {
	user: undefined,
	error: false
};

const namespaced: boolean = true;

export const profile: Module<IProfileState, IRootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
};