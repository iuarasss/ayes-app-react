import Button from "./Button";
import SearchInput from "./SearchInput";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <p className="text-gray-400">
          My View
        </p>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Button>Login</Button>

        <SearchInput />

        <Avatar
          src="https://i.pravatar.cc/100"
        />
      </div>

    </div>
  );
}