import UserList from "../../components/UserList/UserList";

const User = ()=>{
    const USERS = [
        {
            id:"1",
            name:"권현우",
            img:"",
        },
        {
            id: "1",
            name: "권현우",
            img: "",
        }
    ]
    return(
        <div>
            <UserList users={USERS}/>
        </div>
    )
}
export default User;