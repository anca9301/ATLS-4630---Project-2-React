import InputStartDate from './InputStartDate'
import InputEndDate from './InputEndDate'

export default function FilterDateArea() {
    return (
        <div className='filter-date-area'>
        <p className='spacing'>Date:</p>
        <InputStartDate/>
        <p className='spacing'>-</p>
        <InputEndDate/>
        </div>
    )
}