import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <h1 data-testid="foot" className="text-lg font-medium mt-10 py-5 pl-[600px] text-white bg-orange-500">
      Developed with 💖 by {user.name}
    </h1>
  );
};

export default Footer;
