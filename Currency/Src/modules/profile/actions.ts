import { ActionTree } from "vuex";
import { IProfileState, IUser, IRootState } from "Interfaces/profile/types";
import { logUserIn, logUserOut } from "Modules/profile/types";

export const actions: ActionTree<IProfileState, IRootState> = {
	[logUserIn]({ commit }, user: IUser): void {
		commit("PROFILE_LOADED", user);
	},
	[logUserOut]({ commit }): void {
		commit("CLEAR_PROFILE");
	}
};