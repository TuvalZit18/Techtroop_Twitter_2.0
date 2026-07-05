import "./MobileHeader.css";
const MobileHeader = () => {
  return (
    <header className="mobile-header-container">
      <img
        className="mobile-header-profile-image"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7GmHwq1w3wwh--2lgQO0AqZLVTdRI4a2_iy9zlYlUtYDL5STKBnJ1jlsDn-bFNtrFnjEI3CKqrLh4k6n5IULKzdykr1CWnwYdpxvj8AC7oE4NQtMnYw5-R_0b5jmLjriJwAdC67f1QsUteFjBSl9XqtR6lq7W-PGuWv4cNVEFgpT8t7zHvbdVKOjUBMObHKAq1IIZbPW4bPqMJEmyFQBALFw7IecpT5XDAi3ssPez6vekLDymPPw7HepLPeEz2bMwPOSEYjvb6E"
      />
      <h1 className="mobile-header-title">Cardinal</h1>
      <span className="material-symbols-outlined settings">settings</span>
    </header>
  );
};

export default MobileHeader;
