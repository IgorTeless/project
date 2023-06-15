import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostListWrapper from "../molecules/PostListWrapper";

import Default from "../templates/Default";

export default function UserBlog() {
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [Loading, setisLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const [userResponse, postResponse] = await Promise.all([
        fetch(
          `"https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}`
        ).then((response) => response.json()),
        fetch(
          `"https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json()),
      ]);

      setUser(userResponse);
      setPosts(postResponse);
      setisLoading(false);
    };
    getApiData();
  }, [userId]);

  console.log("user", user);
  console.log("posts", posts);

  return Loading ? (
    <Loading />
  ) : (
    <Default>
      <userBio user={user} />
      <PostListWrapper posts={posts} />
    </Default>
  );
}
