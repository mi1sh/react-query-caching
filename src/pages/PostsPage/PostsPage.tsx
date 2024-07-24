import { PageWrapper } from "../PageWrapper.styles.ts";
import { Posts } from "../../types.ts";
import { Post } from "./PostsPage.styles.ts";
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch(`https://dummyjson.com/posts?limit=8`);
    if (!response.ok) {
        throw new Error('Error fetching posts');
    }
    console.log(response);
    return await response.json();
};

export const PostsPage = () => {
    const { data: postsData, isError, isLoading } = useQuery(['posts'], fetchPosts, {
        staleTime: Infinity,
        keepPreviousData: true,
    });

    if (isLoading) {
        return <PageWrapper><p>Loading...</p></PageWrapper>;
    }

    if (isError || !postsData) {
        return <PageWrapper><p style={{color: 'red'}}>Error fetching posts</p></PageWrapper>;
    }

    return (
        <PageWrapper>
            <h3 style={{ marginTop: 80 }}>My posts:</h3>
            <ul>
                {postsData.posts.map((post: Posts) => (
                    <Post key={post.id}>
                        <h3>{post.title}</h3>
                        <hr style={{backgroundColor: '#b4b5d3', border: 'none', height: 2}}/>
                        <p>{post.body}</p>
                    </Post>
                ))}
            </ul>
        </PageWrapper>
    );
};
