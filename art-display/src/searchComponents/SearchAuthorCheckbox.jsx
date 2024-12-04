import useState from 'react'

export default function SearchAuthorCheckbox() {
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
                Artist
            </label>
        </>
    )
}