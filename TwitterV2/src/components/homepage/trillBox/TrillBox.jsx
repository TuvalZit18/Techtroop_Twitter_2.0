import "./TrillBox.css";
const TrillBox = () => {
  return (
    <div className="trillBox-wrapper">
      <img
        className="trillBox-profile-image"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVFGqJQukNQ1q6huJmb1sx8_cB_D88lN7hq8me8QGo_5lh-frA8DTeWqLU4BcrciMuBxoV_qkaqqyGTKWmUZW06GOzGiEQ3xeh-D0jToivdugvdlOpIGw4LdADnEs3DtXt8L7iDC7b7XLRdHjHqkoSwneekiPUXna9r_UkglPQPHCaahz3wMQnNE-GWtdzW06w-rCEkccPAV9Gg9wuoIu--N_AzV6SMYIC6h4sh3SldYVG5ij87oW1lWBidmVlgu0StQKVEryVjwA"
        alt=""
      />
      <div className="trillBox-container">
        <textarea
          className="trillBox-textarea"
          placeholder="Trill your ideas..."
        ></textarea>
        <div className="trillBox-attachments-wrapper">
          <div className="trillBox-attachments-container">
            <button className="btn-attachment">
              <span class="material-symbols-outlined text-[20px]">image</span>
            </button>
            <button className="btn-attachment">
              <span class="material-symbols-outlined text-[20px]">gif_box</span>
            </button>
            <button className="btn-attachment">
              <span class="material-symbols-outlined text-[20px]">poll</span>
            </button>
            <button className="btn-attachment">
              <span class="material-symbols-outlined text-[20px]">
                sentiment_satisfied
              </span>
            </button>
          </div>
          <button className="btn-trill">Trill</button>
        </div>
      </div>
    </div>
  );
};

export default TrillBox;
