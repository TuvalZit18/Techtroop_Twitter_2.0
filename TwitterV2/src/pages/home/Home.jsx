import DesktopHeader from "../../components/homepage/header/Desktop/DesktopHeader";
import MobileHeader from "../../components/homepage/header/mobile/MobileHeader";
import SideNav from "../../components/homepage/sidebar/SideNav";
import TrillBox from "../../components/homepage/trillBox/TrillBox";
import TrillCard from "../../components/homepage/trillCard/TrillCard";
import useBreakpoint from "../../utils/hooks/useBreakPoint";
import { useTrillsState } from "../../context/useTrills";
import "./Home.css";

const Home = () => {
  const breakpoint = useBreakpoint();
  const trills = useTrillsState();
  const header = breakpoint === "mobile" ? <MobileHeader /> : <DesktopHeader />;

  return (
    <div className="main-wrapper">
      <SideNav />
      <div style={{ width: "100%" }}>
        {header}
        <TrillBox />
        {trills.map((trill) => (
          <TrillCard key={trill.id} trill={trill} />
        ))}
      </div>
    </div>
  );
};

export default Home;
