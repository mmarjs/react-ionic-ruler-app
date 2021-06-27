import { IAction } from 'providers/IState';
type Dispatch = React.Dispatch<IAction>;
export const login = async (dispatch: Dispatch, data: { firstname: string; lastname: string; phone: string }) => {
	dispatch({ type: 'LOGIN', payload: data });
};

export const register = async (dispatch: Dispatch, data: { firstname: string | null; lastname: string | null; phone: string | null }) => {
	dispatch({ type: 'REGISTER', payload: data });
};

export const logout = async (dispatch: Dispatch) => {
	dispatch({ type: 'LOGOUT' });
};