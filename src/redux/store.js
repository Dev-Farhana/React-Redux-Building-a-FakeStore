
import reducers from './reducers/index'
import { createStore } from "redux";
export  const store = createStore (
  reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

