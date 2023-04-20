import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth } from "./auth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate("/blog");
    //navigate(-1);//ir para atras
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al Blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && <button>Eliminar BlogPost</button>}
    </>
  );
}

export { BlogPost };
