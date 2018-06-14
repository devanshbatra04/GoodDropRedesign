export const LOGGED_IN = 'LOGGED_IN';

export function onLogIn(Phone,Pass) {

    return {
        type: LOGGED_IN,
        payload: {Phone}
    };
}