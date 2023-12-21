import { useEffect, useState } from "react";
import User from "./component/User";

function prepareUserDirectoryData(userData, postData) {
  let userIdMap = {};

  for (let user of userData) {
    user.numberOfPost = 0;
    user.post = [];
    userIdMap[user.id] = user;
  }

  console.log(userIdMap, " userIdMap ");

  for (let { userId,id , title , body } of postData) {
    const post = { id, title, body };
    console.log(userId, " userId ");
    console.log(post, "post");
    userIdMap[userId].numberOfPost += 1;
    userIdMap[userId].post.push(post)
  }
  console.log(userIdMap, "These arent converted in array yet")
  console.log(Object.values(userIdMap) , "These converted in array")
  return Object.values(userIdMap); // Convert the object to an array
}

function UserDirectory() {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  let userDirectoryData = [];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserData(json))
      .catch((error) => console.error(error));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPostData(json))
      .catch((error) => console.error(error));
  }, []);

  console.log("rendered ");
  if (userData && postData) {
    userDirectoryData = prepareUserDirectoryData(userData, postData);
  }
  console.log(userDirectoryData , "Consoled");

  return (
    <>
    <h2>Directory</h2>
      {userDirectoryData.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
}

export default UserDirectory;
