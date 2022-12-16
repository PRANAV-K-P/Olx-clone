import React, { useEffect, useState, useContext } from "react"; // 43:40 olx part 12
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";

import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    console.warn("entered");
    if (postDetails) {
      const { userId } = postDetails;
      firebase
        .firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    }
  },[]);
  return (
    <div className="viewParentDiv">
      {postDetails && (
        <div className="imageShowDiv">
          <img src={postDetails.url} alt="" />
        </div>
      )}
      <div className="rightSection">
        {postDetails && (
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price} </p>
            <span>{postDetails.name}</span>
            <p>{postDetails.category}</p>
            <span>{postDetails.createdAt}</span>
          </div>
        )}
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;