import { PageWrapper } from "./PageWrapper.styles";
import { useQuery } from "react-query";

const fetchUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    console.log(response);
    if (!response.ok) {
        throw new Error('Error fetching user');
    }
    return response.json();
};

export const HomePage = () => {
    const { data: userData} = useQuery(['user'], fetchUser, {
        staleTime: Infinity, 
        keepPreviousData: true,
    });


    return (
        <PageWrapper>
            <h2>Hi there, I am {userData?.name}</h2>
            <p>Contacts - <span>email: {userData?.email} or phone: {userData?.phone}</span></p>
        </PageWrapper>
    );
};
