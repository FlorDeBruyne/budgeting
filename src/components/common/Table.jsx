function DTable(props){

const {expense, category} = props
let FORMULE = category.filter((itemC) => (itemC.id === expense.categoryId)).map((value) => value.name)
  return (
    <div>
      <table className="table border border-sky-500">
        <tr className=" border border-sky-500">
          <th className=" border border-sky-500">Name</th>
          <th className=" border border-sky-500">Amount</th>
          <th className=" border border-sky-500">Category</th>
        </tr>
        
        {expense.map((item) => {
          return(<tr className=" border border-sky-500">
          <td className=" border border-sky-500">{item.name}</td>
          <td className=" border border-sky-500">{item.amount}</td>
          <td className=" border border-sky-500">{[category.filter((itemC) => (itemC.id === expense.categoryId)).map((value) => value.name)]}</td>
        </tr>)
        })}
        {FORMULE}
      </table>
    </div>
  )
};

export default DTable;