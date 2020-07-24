import { GetterTree } from "vuex";
import { IProfileState, IRootState } from "Interfaces/profile/types";
import { userEmail, isLogged } from "Modules/profile/types";

export const getters: GetterTree<IProfileState, IRootState> = {
	[userEmail](state): string {
		const { user } = state;
		const email = (user && user.email) || null;
		return email;
	},
	[isLogged](state): boolean {
		const { user } = state;
		return (user && user.email !== "" && user.email !== undefined) || false;
	}
};