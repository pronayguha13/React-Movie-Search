import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
// import { loaderDataReducer, userDataReducer, chatDataReducer, feedDataReducer, paymentDataReducer, notificationDataReducer } from './reducers';
// import { languageDataReducer } from "./reducers/language-data";
import movie_reducers from "./reducers/movie-reducer";

const rootReducer = combineReducers({
    userData: movie_reducers,
})

const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: "",
    stateReconciler: hardSet,
    blacklist: []
}

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


export const store = createStore(
    pReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
);

console.log(`store`, store, store.getState)
export const persistor = persistStore(store);