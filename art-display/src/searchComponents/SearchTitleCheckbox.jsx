import useState from 'react'

export default function SearchTitleCheckBox(){
    const [check, setCheck] = useState(false)
    const change = () => {
        setCheck(!check)
    }
    
    return (
        <>
            <label>
                <input 
                type="checkbox"
                checked={check}
                onchange={change}
                />
                Title
            </label>
        </>
    )
}