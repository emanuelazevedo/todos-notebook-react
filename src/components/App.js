import { Navbar } from './Navbar'
import {TodosPage} from './TodosPage'
import '../styles/App.css'

import { Provider } from "react-redux";
import store from "../store/index";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container-fluid">
        <TodosPage />
      </div>
    </Provider>
  );
}

export default App;
