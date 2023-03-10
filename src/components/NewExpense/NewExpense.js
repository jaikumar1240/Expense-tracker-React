import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (event) => {
        const expenseData = {
            ...event,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onsaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;