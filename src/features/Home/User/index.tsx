import fetcher from "src/dataProvider";

export type UserType = {
  id: string;
  name: string;
  fcmToken: string;
};

type UserProps = {
  users: UserType[];
  currentUser: UserType | null;
};

const User = ({ users, currentUser }: UserProps) => {
  const pingUser = async (notificationReceiverID: string) => {
    await fetcher()
      .post("api/v1/notify/send-notification", {
        notificationSenderID: currentUser?.id,
        notificationReceiverID: notificationReceiverID,
      })
      .catch((err) => console.log(err));
  };

  const renderUser = (user: UserType) => {
    return (
      <div key={user.id} className="flex items-center gap-5">
        <div>{user.name}</div>
        <button onClick={async () => await pingUser(user.id)}>Ping User</button>
      </div>
    );
  };
  return (
    <>{users?.filter((user) => user.id !== currentUser?.id)?.map(renderUser)}</>
  );
};

export default User;
