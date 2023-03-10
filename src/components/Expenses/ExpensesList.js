import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found!</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.item.map((res) => {
                return <ExpenseItem
                    key={res.id}
                    title={res.title}
                    amount={res.amount}
                    date={res.date}
                />
            })}
        </ul>
    )
}
export default ExpensesList;