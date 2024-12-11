import InputStartDate from './InputStartDate'
import InputEndDate from './InputEndDate'

export default function FilterDateArea() {
    return (
        <div className='filter-date-area'>
        <p>Date:</p>
        <InputStartDate/>
        <p>-</p>
        <InputEndDate/>
        </div>
    )
}