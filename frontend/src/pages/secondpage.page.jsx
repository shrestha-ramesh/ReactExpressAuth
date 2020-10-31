import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
const SecondPage = () => {
  const [user, setUser] = useState(true);

  useEffect(() => {
    const getName = localStorage.getItem("name");
    if (!getName) {
      setUser(false);
    }
  }, []);
  return (
    <div>
      {user ? (
        <div style={{backgroundColor:"gray",margin:10,padding:10,fontSize:30}}>
          Courtyard Marriot Ottawa East, located just minutes from downtown.
          Conveniently situated away from congestion and crowds, we provide you
          with a refreshing opportunity to experience choices and flexibility
          like never before. Complimentary high-speed Internet is available
          throughout our hotel, and keep up your physical routine in our 24-hour
          fitness center. Unmatched by other Ottawa hotels, our spacious guest
          rooms provide flexibility in your work space and comfort in your rest
          space. Whether traveling for business or pleasure, your stay at the
          Courtyard Ottawa East is sure to be more comfortable, productive and
          enjoyable than ever before. Program Leader Evaluations: “Great hotel!
          Staff and support were very helpful and kind.”
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
export default SecondPage;
