import { Component } from "react";
import {v4} from "uuid";
import TransactionItem from "../TransactionItem";
import MoneyDetails from "../MoneyDetails";
import "./index.css";

const transactionTypeOptions=[
    {
        optionId:"INCOME",
        displayText:"Income"
    },
    {
        optionId:"EXPENSES",
        displayText:"Expenses"
    },

]

class MoneyManager extends Component{
    state={
        transactionsList:[],
         titleInput:"",
         amountInput:"",
         optionId:transactionTypeOptions[0].optionId
    }


    deleteTransaction=id=>{
        const {transactionsList}=this.state
        const updatedTransactionList=transactionsList.filter(
            eachTransaction=>id !== eachTransaction.id,
        )
        this.setState({
            transactionsList:updatedTransactionList
        })
    }



    onAddTransaction=event=>{
        event.preventDefault()
        const {titleInput,amountInput,optionId}=this.state
        const typeOption=transactionTypeOptions.find(
            eachTransaction=>eachTransaction.optionId === optionId,
        )

        const {displayText}=typeOption
        const newTransaction={
            id:v4(),
            title:titleInput,
            amount:parseInt(amountInput),
            type:displayText
        }
        this.setState(prevState=>({
            transactionsList:[...prevState.transactionsList,newTransaction],
            titleInput:"",
            amountInput:"",
            optionId:transactionTypeOptions[0].optionId,
        }))
        
    }

    onChangeOptionId=event=>{
        this.setState({optionId:event.target.value})
    }

    onChangeAmountInput=event=>{
        this.setState({amountInput:event.target.value})
    }

    onChangeTitleInput=event=>{
        this.setState({titleInput:event.target.value})
    }

    getExpenses=()=>{
        const {transactionsList}=this.state
        let expensesAmount=0
        transactionsList.forEach(each=>{
            if(each.type===transactionTypeOptions[1].displayText){
                expensesAmount +=each.amount
            }
        })
        return expensesAmount
    }


    getIncome=()=>{
        const {transactionsList}=this.state
        let incomeAmount=0
        transactionsList.forEach(each=>{
            if(each.type===transactionTypeOptions[0].displayText){
                incomeAmount +=each.amount
            }
        })
        return incomeAmount
    }


    getBalance=()=>{
        const {transactionsList}=this.state
        let balanceAmount=0
        let incomeAmount=0
        let expensesAmount=0


        transactionsList.forEach(each=>{
            if(each.type===transactionTypeOptions[0].displayText){
                incomeAmount +=each.amount
            }else{
                expensesAmount +=each.amount
            }
        })
        balanceAmount=incomeAmount-expensesAmount
        return balanceAmount
    }
   render(){
       const {titleInput,amountInput,optionId,transactionsList}=this.state 
       const balanceAmount = this.getBalance()
       const incomeAmount=this.getIncome()
       const expensesAmount = this.getExpenses()

   return(
       <div className="app-container">
           <div className="responsive-container">
               <div className="header">
                   <h1>Hi, Prem</h1>
                   <p>welcome back to your <span>Money Manager</span></p>
               </div>
               <MoneyDetails balanceAmount={balanceAmount}
               incomeAmount={incomeAmount}
               expensesAmount={expensesAmount}
               />

               <div className="transaction-details">
                  <form className="transaction-form" onSubmit={this.onAddTransaction}>
                  <h1>Add Transaction</h1>
                  <label >Title</label>
                  <input  className="align" type="text" id="title" value={titleInput} onChange={this.onChangeTitleInput} placeholder="TITLE">
                  </input>

                  <label>Amount</label>
                  <input className="align" type="text" id="amount" value={amountInput} onChange={this.onChangeAmountInput} placeholder="AMOUNT">
                  </input>

                  <label>Type</label>
                 <select id="select"  className="align" value={optionId} onChange={this.onChangeOptionId} >
                     {transactionTypeOptions.map(each=>(
                         <option key={each.optionId} value={each.optionId}>
                             {each.displayText}
                         </option>
                     ))}
                 </select>
                 <button type="submit" className="btn btn-primary">Add</button>
                 </form>

                 <div className="history-transactions">
                     <h1>History</h1>
                         <ul className="transaction-table">
                             <li className="table-header">
                                 <p>Title</p>
                                 <p>Amount</p>
                                 <p>Type</p>
                             </li>
                             <li className="transaction-table p-1">
                             {transactionsList.map(each=>(
                                 <TransactionItem key={each.id} transactionDetails={each} deleteTransaction={this.deleteTransaction} />
                             ))}
                             </li>
                            
                         </ul>
                   


                 </div>
               </div>
           </div>
       </div>
   )
   }
}


export default MoneyManager



