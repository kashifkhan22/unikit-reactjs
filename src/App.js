import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Reports from "./pages/Reports";
import Customers from "./pages/Customers";

function App() {
  return (
    <BrowserRouter>
      <div id="body" className="dark-sidebar menuitem-active">
        <Sidebar />
        <Navbar />
        <div className="page-wrapper">
          <div className="page-content-tab">
            <Switch>
              <Route exact path={"/"} component={Main} />

              <Route path={"/reports"} component={Reports} />
              <Route path={"/customers"} component={Customers} />
            </Switch>

            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
