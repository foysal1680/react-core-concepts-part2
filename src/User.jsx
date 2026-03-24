import { use } from "react"
import Use from "./use"

export default function Users({fetchUser}){
    const users=use(fetchUser)
    console.log(users)


    return(
        <div className="card">
            <h3>Users:{users.length}</h3>
            {
                users.map(users=> <Use users={users}></Use>)
                
            }
        </div>
    )
}