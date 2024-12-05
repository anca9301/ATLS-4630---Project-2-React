import InputStartDate from './InputStartDate'
import InputEndDate from './InputEndDate'

export default function FilterDateArea() {
    return (
        <div className='filter-date-area'>
        <h2>Date:</h2>
        <InputStartDate/>
        <h2>-</h2>
        <InputEndDate/>
        </div>
    )
}