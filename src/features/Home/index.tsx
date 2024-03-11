import { useEffect, useState } from "react";
import fetcher from "src/dataProvider";
import { FirebaseInitializer } from "src/firebase";
import AddUser from "./AddUser";
import Notification from "./Notification";
import User from "./User";

const Home = () => {
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);

  const id = localStorage.getItem("id") ?? "";
  const name = localStorage.getItem("name") ?? "";

  const [currentUser, setCurrentUser] = useState({ id, fcmToken: token, name });

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetcher()
        .get("/api/v1/user")
        .catch((err) => console.log(err));
      setUsers(data?.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex items-center justify-center text-[16px] mb-[142px] mt-[50px]">
      <div className="w-[77.44%]">
        <FirebaseInitializer setToken={setToken} />
        <Notification />
        {currentUser?.name ?? ""}
        <AddUser
          setUsers={setUsers}
          setCurrentUser={setCurrentUser}
          token={token}
        />
        {!!currentUser?.name ? (
          <User users={users} currentUser={currentUser} />
        ) : (
          "Please Add yourself as user"
        )}
      </div>
    </div>
  );
};

export default Home;
