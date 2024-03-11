import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import Input from "src/components/FormComponents/Input";
import fetcher from "src/dataProvider";
import { UserType } from "../User";

type AddUserProp = {
  setUsers: SetStateAction<any>;
  setCurrentUser: SetStateAction<any>;
  token: string;
};

type FormData = { name: string };

const AddUser = ({ setUsers, setCurrentUser, token }: AddUserProp) => {
  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    mode: "all",
    defaultValues: { name: "" },
  });

  const handleFormSubmit = async (formData: FormData) => {
    console.log("🚀 ~ handleFormSubmit ~ formData:", formData);

    const data = await fetcher()
      .post("api/v1/user", {
        name: formData.name,
        fcmToken: token,
      })
      .catch((err) => console.log(err));

    if (!!data?.data) {
      const current = data?.data?.find(
        (user: UserType) => user.fcmToken === token
      );

      setUsers(data?.data);
      setCurrentUser(current);

      reset({});

      localStorage.setItem("id", current?.id);
      localStorage.setItem("token", current?.token);
      localStorage.setItem("name", current?.name);
    }
  };

  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex items-center gap-5"
    >
      <Input register={register} name="name" errors={errors} />
      <button
        className="bg-[#6366f1] text-[white] rounded-[10px] p-[10px]"
        type="submit"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUser;
