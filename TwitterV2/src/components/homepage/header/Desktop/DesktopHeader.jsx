import "./DesktopHeader.css";
const DesktopHeader = () => {
  return (
    <header className="desktop-header-wrapper">
      <div className="desktop-header-container">
        <button className="btn-foryou">
          <span className="btn-foryou-text">For you</span>
          <div className="btn-bottom-ruler selected"></div>
        </button>
        <button className="btn-foryou">
          <span className="btn-foryou-text">Following</span>
          <div className="btn-bottom-ruler"></div>
        </button>
      </div>
    </header>
  );
};

export default DesktopHeader;
