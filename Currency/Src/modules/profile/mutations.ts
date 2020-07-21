import { MutationTree } from "vuex";
import { IProfileState, IUser } from "Interfaces/profile/types";

export const mutations: MutationTree<IProfileState> = {
	PROFILE_LOADED(state, payload: IUser) {
		state.error = false;
		state.user = payload;
	}
};