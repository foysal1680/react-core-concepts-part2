export default function Use({users}){
    const {name,email,phone}=users

    return(
        <div>
            <h4>Nmae:{name}</h4>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
        </div>
    )
}