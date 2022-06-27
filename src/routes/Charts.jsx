import DTable from "../components/common/Table";
import PieChart from "../components/PieChart";
import Transaction from "../components/Transaction";
import CHART_DATA from "../mock-Data/chartData";


function Charts(){
  return (
    <main>
      {CHART_DATA.map((data) => (
	      <Transaction {...data} />
      ))}

      {CHART_DATA.map((chart) => (
	      <PieChart {...chart} />
      ))}

      {CHART_DATA.map((fin) => (
	      <DTable {...fin} />
      ))}
      <h2>Charts come here</h2>
    </main>
  );
};


export default Charts;