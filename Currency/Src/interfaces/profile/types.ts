export interface IRootState {
	version: string;
}

export interface IUser {
	email: string;
}

export interface IProfileState {
	user?: IUser;
	error: boolean;
}