import { memo } from "react";
import { useOutletContext } from "react-router-dom";

const Reviews = memo(function Reviews() {
  const userData = useOutletContext().userData;

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">App Reviews</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {userData ? (
          userData.map(user => (
            <div
              key={user.firstName}
              className="bg-black text-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={user.image}
                alt="Avatar"
                className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="font-semibold text-lg">{user.firstName} {user.lastName}</p>
              <p className="mt-2 text-sm text-gray-400">
                Rem quisquam nostrum quasi alias, autem iste quos ea unde similique fuga
                consequatur iure iusto dicta itaque deserunt suscipit doloribus?
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
});

export default Reviews;
