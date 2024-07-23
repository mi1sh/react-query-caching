import { PageWrapper } from "./PageWrapper.styles"
import { Posts } from "../types"
import { Post } from "./PostsPage.styles"
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`);
    console.log(response);
    if (!response.ok) {
        throw new Error('Error fetching posts');
    }
    return response.json();
  };

export const PostsPage = () => {
    const { data: postsData, isError } = useQuery(['posts'], fetchPosts, {
        staleTime: Infinity, 
        keepPreviousData: true,
      });
    
      if (isError || !postsData) {
        return <PageWrapper><p>Error fetching photos</p></PageWrapper>;
      }

    return (
        <PageWrapper>
            <h3 style={{ marginTop: 80 }}>My posts:</h3>
            <ul>
                {postsData.map((post: Posts) => (
                    <Post key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </Post>
                )
                )}
            </ul>
        </PageWrapper>
    )
}