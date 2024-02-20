type Props = {
    users: {
        id: string;
        name: string;
        img: string
    }[]
}

const UserList = ({users}:Props)=>{
    return (
        <div>
            {users.map((item,idx)=>(
                <div>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    )
};

export default UserList;