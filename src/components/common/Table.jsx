function DTable(props){

const {expense, category} = props
let FORMULE = category.map((value) => (value.name)).filter((itemC) => (expense.categoryId === itemC.id))
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
          <td className=" border border-sky-500">{category.map((value) => (value.name)).filter((itemC) => (item.categoryId == itemC.id))}</td>
        </tr>)
        })}
        {FORMULE}
      </table>
    </div>
  )
};

export default DTable;