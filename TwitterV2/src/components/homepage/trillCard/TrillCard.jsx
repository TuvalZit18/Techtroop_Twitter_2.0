import "./TrillCard.css";

const TrillCard = ({ trill }) => {
  return (
    <article className="tillCard-wrapper">
      <img
        className="tillCard-profile-image"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUK9PY5LSNUax8GS-SAjV7TdHqVPQecLQ1ev8cDvSqpcGVuHPtdJ5c8eFFIUH1hQSFgZtweSKqw-4ZdzvJ3h3hAd7jx6PST2HatvuU9XnxSKGoIIOG76ndDaxXCpgk1AxTmejFXhktyKQD0zu6PvtAsHNUV-yzwtYQeSMlDWj0U5RhEXsZL0nlxAXN4O25QnZefAooB_sKx6dD4_R12uFv3pVGEsVVHx8bwTqjfsynCSkSpDiiuZgMB-McQkzm3gYexTwvO0XcMo"
      />
      <div className="tillCard-container">
        <div className="tillCard-profile-info-container"></div>
        <span className="tillCard-profile-name">{trill.userName}</span>
        <span className="tillCard-profile-username">@JD18</span>
        <span className="tillCard-datetime">
          · {new Date(trill.date).toLocaleString()}
        </span>
        <p>{trill.content}</p>
        <div className="trillCard-image-container">
          <img
            className="trillCard-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZl-WKsAK8va-3cayolotoeAs7UxM0CcYwnZnV22cjIbg9QBbLGJ3uq6Ukpaj5jKYjILnB3W0iu9iYzn5OwXnMWJu4881yWVH57OH6G3PjHE9XIhDrKcWBii66QPYGuPqw8Xy-zC4ZjedFeCaiR_OzFNhYmtlW5W4NGD8Nk2SMTG_EhBWagKVncdfAYP51QhBmR0hw_8NkzwaKRmNA2Uxo94E7Nx7lqYc3WIvzo7CPD13y3yYNRmvXuVhfx7ZznyaXG64eUBpoEA"
          />
        </div>
        <div className="trillCard-controls-container">
          <div className="control-container">
            <button className="btnComments">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <span>180</span>
          </div>
          <div className="control-container">
            <button className="btnComments">
              <span className="material-symbols-outlined">chat_bubble</span>
            </button>
            <span>180</span>
          </div>
          <div className="control-container">
            <button className="btnComments">
              <span className="material-symbols-outlined">repeat</span>
            </button>
            <span>180</span>
          </div>
          <div className="control-container">
            <button className="btnComments">
              <span className="material-symbols-outlined">share</span>
            </button>
            <span>180</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TrillCard;
