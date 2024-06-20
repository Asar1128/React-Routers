import { useParams } from "react-router-dom"

export default function User(){
    const {UserId} = useParams()
    return(
        <>
        <h1 className="text-center bg-gray-600 text-3xl py-3 text-white">Hello : {UserId}</h1>
        </>
    )
}