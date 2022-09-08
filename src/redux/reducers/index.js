//Implementa il pattern Redux nell’applicazione, con uno store e un reducer.

const initialState = {
    profile: {
        favourites: []
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES': return {
            ...state,
            profile: {
                ...state.profile,
                favourites: [...state.profile.favourites, action.payload]
            }
        };
        case 'DELETE_FROM_FAVOURITES': return {
            ...state,
            profile: {
                ...state.profile,
                favourites: state.profile.favourites.filter(company => company.company_name !== action.payload)
            }
        };;
        default: return state;
    }
};

export default mainReducer;