

export const reducer = (state, action) => {
    switch (action.type) {
        case 'LIST_DENT':
            return { ...state, dentistList: action.payload }
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'REMOVE_FAV':
            const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload)
            return { ...state, favs: filteredFavs }
        case 'THEME':
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    }
}





