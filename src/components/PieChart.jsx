import React from "react"
import  Chart  from "react-apexcharts";



function PieChart(props){
  const {title, series,  lables} = props
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <h3 className="mt-3">Welcome to budgetChart</h3>
        <form action="">
          
          <input type="radio"></input>
          <label for="pieChart">pie chart</label> <br />
          
          <input type="radio"></input>
          <label for="barChart">bar chart</label><br />
        </form>
        
        
        <Chart 
        type="pie"
        width = {1349}
        height = {550}
  
        series = {series}
  
        options = { {
          
          title: { text: title},

          noData:{text : "Empty Data"},
  
          labels:[...lables],
  
        } }>
  
        </Chart>
  
      </div>
    </React.Fragment>
  );
  
  
  }
  
  export default PieChart;








// import { Chart } from "react-charts/dist/react-charts.development"

// function Chart() {
// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);


// };




// export default {Chart}; 



// export default function MyChart() {
  
//   const data = React.useMemo(
//     () => [
//       {
//         label: 'Series 1',
//         data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//       },
//       {
//         label: 'Series 2',
//         data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//       },
//       {
//         label: 'Series 3',
//         data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//       }
//     ],
//     []
//   )
 
//   const axes = React.useMemo(
//     () => [
//       { primary: true, type: 'linear', position: 'bottom' },
//       { type: 'linear', position: 'left' }
//     ],
//     []
//   )

//   return (
//     <div
//       style={{
//         width: '400px',
//         height: '300px'
//       }}
//     >
//       <Chart data={data} axes={axes} />
//     </div>
//   )
 
// };


