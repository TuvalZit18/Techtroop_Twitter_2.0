import { Link } from "react-router";
import "./SideNav.css";
const SideNav = () => {
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar-title-wrapper">
        <h1 className="sidebar-title">Cardinal</h1>
      </div>
      <nav className="sidebar-links-container">
        <Link className="sidebar-link-container" to="/">
          <span className="material-symbols-outlined icons-fill">home</span>
          <span className="sidebar-links-text">Home</span>
        </Link>
        <Link className="sidebar-link-container on-surface" to="/Explore">
          <span className="material-symbols-outlined group-hover:text-primary">
            search
          </span>
          <span className="font-title-md text-title-md group-hover:text-primary">
            Explore
          </span>
        </Link>
        <Link className="sidebar-link-container on-surface" to="/Notifications">
          <span className="material-symbols-outlined group-hover:text-primary">
            notifications
          </span>
          <span className="font-title-md text-title-md group-hover:text-primary">
            Notifications
          </span>
        </Link>
        <Link className="sidebar-link-container on-surface" to="/Profile">
          <span className="material-symbols-outlined group-hover:text-primary">
            person
          </span>
          <span className="font-title-md text-title-md group-hover:text-primary">
            Profile
          </span>
        </Link>
        <button className="btnPost">Post</button>
      </nav>
      <div className="sidebar-footer-container">
        <img
          className="profile-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7R9dJdwcefN8uPyL-HzwIOsX3TRtIx0D8mv1eSCGbMgi-NpYwYIOcKDGn6KnfcxpiKy8pLkkK4D5gCFebsp5x9oRNnYkKKttlkknNFeI2Vrn4ZNPt2rTO7A_hWXaI0oDvMkXu24zjtLEWPw83pUBvouPHtb-3LnpyD-NAnjgB0civYgQKswqtzVVdlDpagYu4-Gy9OBR9Na1QQ2uIcGmNYoEW2Bg3EUTyyCsT21ssb47C-F8V1CqNNAMDsa7a2Ly343oygzvmaIA"
        />
        <div className="profile-text-container">
          <span className="profile-name-text">Jenny Doe</span>
          <span className="profile-username-text">@Jenny Doe</span>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
