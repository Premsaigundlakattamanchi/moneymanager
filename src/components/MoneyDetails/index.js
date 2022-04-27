import "./index.css"

const MoneyDetails=(props)=>{
  const {balanceAmount,incomeAmount,expensesAmount}=props
  return(
      <div className="money-details-container">
          <div className="balance-container">
             <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" className="img"/>
             <div>
                 <p>Your Balance</p>
                 <p testid="balanceAmount">Rs {balanceAmount}</p>
             </div>
          </div>
          <div className="income-container">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income" className="img"/>
                <div>
                 <p>Your Income</p>
                 <p testid="incomeAmount">Rs {incomeAmount}</p>
             </div>
          </div>

          <div className="expenses-container">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="income" className="img"/>
                <div>
                 <p>Your Expenses</p>
                 <p testid="expensesAmount">Rs {expensesAmount}</p>
             </div>
          </div>
      </div>
  )
}

export default  MoneyDetails