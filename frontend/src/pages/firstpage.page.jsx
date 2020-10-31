import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
const FirstPage = () => {
  const [user, setUser] = useState(true);

  useEffect(() => {
    const getName = localStorage.getItem("name");
    if (!getName) {
      console.log("Did not find name");
      setUser(false);
    }
  }, []);

  return (
    <div>
      {user ? (
        <div style={{ backgroundColor: "gray", margin: 10, padding: 10,fontSize:30 }}>
          Hotel Description: Minutes away from the heart of downtown Ottawa, the
          109 room WelcomINNS Ottawa offers comfort and convenience at an
          affordable price. The WelcomINNS Ottawa is perfectly situated off the
          Trans-Canada Highway, across the street from the St. Laurent Shopping
          Centre and in close proximity to top tourist destinations, including
          the Canada Science and Technology Museum, the National Gallery of
          Canada, and Parliament Hill. As a guest, your comfort and satisfaction
          are our top priority. For this reason, we provide complimentary
          parking, Wi-Fi, and continental breakfast. We also offer an onsite
          fitness facility available 24/7. Program Leader Evaluations:
          “Comfortable beds and nice ambiance/atmosphere.”
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
export default FirstPage;
