import { signOut } from "next-auth/react";
import EmptyState from "../components/emptyState";

const Users = () => {
  return (
    <div className="hidden md:block md:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
