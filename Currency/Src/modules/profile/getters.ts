import { GetterTree } from "vuex";
import { IProfileState, IRootState } from "Interfaces/profile/types";

export const getters: GetterTree<IProfileState, IRootState> = {
	userEmail(state): string {
		const { user } = state;
		const email = (user && user.email) || null;
		return email;
	}
};