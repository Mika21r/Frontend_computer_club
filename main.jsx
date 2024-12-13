import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import Store from './src/store/store.jsx';

export const store = new Store();
export const Context = createContext({
  store
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Context.Provider value={{
      store
    }}>
      <h1>Hello word!</h1>
      <App />
    </Context.Provider>
  
)
