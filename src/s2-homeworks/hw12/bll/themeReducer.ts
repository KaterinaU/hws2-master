
type stateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: stateType = initState, action: changeThemeIdType): stateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
