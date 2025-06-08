import Inbox from "./Content/Inbox";
import Favorites from "./Content/Favorites";

const Maincontent = ({ activeMenu }) => {
  return (
    <>
    {activeMenu ==='Inbox' && <Inbox />}
    {activeMenu ==='Favorites' && <Favorites />}
    </>
  );
};

export default Maincontent;
