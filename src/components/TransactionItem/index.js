import "./index.css"

const TransactionItem= props=>{
    const {transactionDetails,deleteTransaction}=props
    const {id,title,amount,type}=transactionDetails
    
    const onDeleteTransaction=()=>{
        deleteTransaction(id)
    }



    return(
        <>
        <table>
        <thead >
           <th >{title}</th>
           <th>Rs {amount}</th>
           <th>{type}</th>
           </thead>
        </table>
          
           <div>
               <button type="button" onClick={onDeleteTransaction} testid="delete" >
                   <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete" className="del-img"/>
               </button>
           </div>
           </>
    )
}
export default TransactionItem