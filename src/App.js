import "./App.css";
import Transaction from "./components/Transaction";
import TRANSACTION_DATA from "./mock-Data/transactionData";
import PieChart from "./components/PieChart";
import CHART_DATA from "./mock-Data/chartData";
import Header from "./components/common/header";
import DTable from "./components/common/Table";
function App() {
	return (
		<div>
			<Header />

			{TRANSACTION_DATA.map((transaction) => (
				<Transaction {...transaction.Transaction_Key} {...transaction} />
			))}

			{CHART_DATA.map((chart) => (
				<PieChart {...chart} />
			))}

			{CHART_DATA.map((fin) => (
				<DTable {...fin} />
			))}
		</div>
	);
}

export default App;
