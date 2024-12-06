import ToggleFavStatusButton from './ToggleFavStatusButton'

export default function ArtHeader({artId, title, author}) {
    return (
        <>

            <ToggleFavStatusButton artId={artId}/>
        </>
    )
}