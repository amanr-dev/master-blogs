import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

// params => slug => service => getPost => edit

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          alert("Coudn't find the post to edit");
        }
      });
    }
  }, [slug, navigate]);
  return (
    <div className="py-6 ">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};

export default EditPost;
