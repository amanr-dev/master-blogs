import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const naviagte = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const authenticated = post && userData ? post.userId === userData.id : false;

  const deletePost = () => {
    service.deletePost(post.id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        naviagte("/");
      }
    });
  };

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          naviagte("/");
        }
      });
    }
  }, [slug, naviagte]);

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {authenticated && (
            <div className="absolute-right-6 top-6">
              <Link to={`/edit-post/${post.id}`} className="">
                <Button className="bg-blue-500 text-white mr-3">
                  Edit post
                </Button>
              </Link>
              <Button
                className="bg-red-500 text-white mr-3"
                onClick={deletePost}
              >
                Delete post
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h5 className="text-2xl font-bold text-slate-500">{post.title}</h5>
          <div className="browser-css">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="mx-auto text-2xl text-slate-500 font-bold">
      <h4>Post not found!</h4>
    </div>
  );
};

export default Post;
