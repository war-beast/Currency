import { MutationTree } from "vuex";
import { IProfileState, IUser } from "Interfaces/profile/types";
import { CLEAR_PROFILE, PROFILE_LOADED } from "Modules/profile/types";

export const mutations: MutationTree<IProfileState> = {
	[PROFILE_LOADED](state, payload: IUser) {
		state.error = false;
		state.user = payload;
	},
	[CLEAR_PROFILE](state) {
		state.error = false;
		state.user = undefined;
	}
};