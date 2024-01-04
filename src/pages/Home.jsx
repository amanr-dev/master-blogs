import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import PostCard from "../components/PostCard";
import Container from "../components/container/Container";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   service.getPosts([]).then((post) => {
  //     if (post) {
  //       setPosts(post.documents);
  //     }
  //   });
  // }, []);

  if (!posts?.length) {
    return (
      <div className="w-full py-8">
        <div className="flex flex-wrap justify-center items-center flex-col ">
          <h4>Please Login to Read Posts</h4>
          <Link to="/login">
            <Button bgColor="bg-blue-500" textColor="text-white">
              Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="py-2 flex-wrap">
              <PostCard {...post} key={post.id} />
            </div>
          ))}
          Hello to home
        </div>
      </Container>
    </div>
  );
};

export default Home;
