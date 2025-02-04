import { useParams } from "react-router";

const UserDetails = () => {
  let { userId } = useParams();

  return (
    <div>User ID: {userId}</div>
  )
}

export default UserDetails