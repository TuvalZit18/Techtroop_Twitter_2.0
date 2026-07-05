import { useState } from "react";
import { createTrill } from "../../../lib/trills";
import { useTrillsDispatch } from "../../../context/useTrills";
import "./TrillBox.css";

const MAX_CHARS = 140;
const HARDCODED_USERNAME = "you_the_creator"; // temporary until Step 3 (user page)

const TrillBox = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useTrillsDispatch();

  const isTooLong = content.length > MAX_CHARS;
  const isEmpty = content.trim().length === 0;
  const isDisabled = isTooLong || isEmpty || loading;

  async function handleTrillClick() {
    setLoading(true);
    setError(null);
    try {
      const newTrill = await createTrill(content, HARDCODED_USERNAME);
      dispatch({ type: "ADD_TRILL", payload: newTrill });
      setContent("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        ></textarea>
        {isTooLong && (
          <span className="trillBox-char-warning">
            {content.length}/{MAX_CHARS} — too long
          </span>
        )}
        {error && <span className="trillBox-error">{error}</span>}
        <div className="trillBox-attachments-wrapper">
          <div className="trillBox-attachments-container">
            <button className="btn-attachment">
              <span className="material-symbols-outlined text-[20px]">
                image
              </span>
            </button>
            <button className="btn-attachment">
              <span className="material-symbols-outlined text-[20px]">
                gif_box
              </span>
            </button>
            <button className="btn-attachment">
              <span className="material-symbols-outlined text-[20px]">
                poll
              </span>
            </button>
            <button className="btn-attachment">
              <span className="material-symbols-outlined text-[20px]">
                sentiment_satisfied
              </span>
            </button>
          </div>
          <button
            className="btn-trill"
            onClick={handleTrillClick}
            disabled={isDisabled}
          >
            {loading ? "Trilling..." : "Trill"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrillBox;
