import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TabView from "./components/TabView.jsx";
import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>Tab View Application</h1>
        </header>
        <main>
          <TabView />
        </main>
      </div>
    </Provider>
  );
};

export default App;
