import { memo } from "react";
import { useOutletContext } from "react-router-dom";
import './review.css'; // Assuming you're using this CSS file

const Reviews = memo(function Reviews() {
  const userData = useOutletContext().userData;

  return (
    <div className="reviews-container">
      <h2>App Reviews</h2>
      <div className="reviews-grid">
        {userData ? (
          userData.map(user => (
            <div key={user.firstName} className="review-item">
              <img src={user.image} alt="Avatar" className="review-avatar" />
              <p>{user.firstName} {user.lastName}</p>
              <p>
                Rem quisquam nostrum quasi alias, autem iste quos ea unde similique fuga consequatur iure iusto dicta itaque deserunt suscipit doloribus?
              </p>
            </div>
          ))
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
});

export default Reviews;
