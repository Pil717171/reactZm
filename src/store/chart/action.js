export const GET_TEST = 'GET_TEST'

export function getTest (test) {
    console.log(test)
    return (dispatch) => {
        dispatch({
            type: GET_TEST,
            payload: test
        })
    }
}