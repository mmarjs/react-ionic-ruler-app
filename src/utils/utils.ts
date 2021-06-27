export const unifyIdentifier = (identifier: string) =>
	identifier
		.trim()
		.toLowerCase()
		.replace(/[\W-_]/g, '');

export const validateEmail = (email: string): boolean => {
	// const regExpForEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const regExpForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return regExpForEmail.test(email);
};

export const validatePassword = (password: string): boolean => {
	const regExpForPassword = /^(?=(?:.*?[0-9]){2})(?=.*[A-Z])(?=.*\W)(?=.{6,}$)/;

	return regExpForPassword.test(password);
};

export const validateNumber = (num: string): boolean => {
	const regExpForNumber = /^[0-9]*$/;

	return regExpForNumber.test(num);
};

export const validateCardNumberLength = (num: string): boolean => {
	const regExpForNumber = /^\d{16}$/;

	return regExpForNumber.test(num);
};

export const validateDate = (date: string): boolean => {
	const regExpForDate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

	// const regExpForDate = /^(((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
	return regExpForDate.test(date);
};
