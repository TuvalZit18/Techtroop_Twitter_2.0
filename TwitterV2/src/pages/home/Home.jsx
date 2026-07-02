import DesktopHeader from "../../components/homepage/header/Desktop/DesktopHeader";
import MobileHeader from "../../components/homepage/header/mobile/MobileHeader";
import SideNav from "../../components/homepage/sidebar/SideNav";
import useBreakpoint from "../../utils/hooks/useBreakPoint";
import "./Home.css";
const Home = () => {
  const breakpoint = useBreakpoint();
  const header = breakpoint === "mobile" ? <MobileHeader /> : <DesktopHeader />;
  return (
    <div className="main-wrapper">
      <SideNav />
      {header}
      <SideNav />
    </div>
  );
};

export default Home;
