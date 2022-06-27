import "./App.css";
import Transaction from "./components/Transaction";
// import TRANSACTION_DATA from "./mock-Data/transactionData";
import PieChart from "./components/PieChart";
import CHART_DATA from "./mock-Data/chartData";

import DTable from "./components/common/Table";

import Header from "./components/common/header";

import { Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			{/* <Route exact path='/' component={Home} /> */}
			<Header />

			

			<Outlet />
		</div>
	);
}

export default App;




