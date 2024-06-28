import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Vijendra Pandey",
    email: "vijendra102002@gmail.com",
  },
});

export default UserContext;
