import {PageWrapper} from '../PageWrapper.styles.ts';
import {useQuery} from 'react-query';
import {CountryCard, CountryList} from './HomePage.styles.ts';
import {User} from '../../types.ts';

const fetchUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    if (!response.ok) {
        throw new Error('Error fetching user');
    }
    console.log(response);
    return response.json();
};

const fetchCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/subregion/Southern%20Europe?fields=name,flag`);
    if (!response.ok) {
        throw new Error('Error fetching countries');
    }
    return response.json();
}

export const HomePage = () => {
    const { data: userData, isLoading: isUserDataLoading, isError: isUserDataError } = useQuery<User>(['user'], fetchUser, {
        staleTime: Infinity,
        keepPreviousData: true,
    });

    const { data: countriesData, isLoading: isCountriesLoading, isError: isCountriesError } = useQuery(['countries'], fetchCountries, {
        staleTime: Infinity,
        keepPreviousData: true,
    });

    if (isUserDataLoading || isCountriesLoading) {
        return <PageWrapper><p>Loading...</p></PageWrapper>;
    }

    if (isUserDataError || isCountriesError || !userData) {
        return <PageWrapper><p style={{color: 'red'}}>Error fetching data</p></PageWrapper>;
    }

    return (
        <PageWrapper>
            <div>
                <h1>Hi there, I am <span style={{color: '#747bff'}}>{userData?.name}</span>, and you're on my page!</h1>
                <span>My contacts - email: <a target='_blank' href={`mailto:${userData?.email}`}>{userData?.email}</a> or
                    phone: <a target='_blank' href={`tel:${userData?.phone}`}>{userData?.phone}</a></span>
            </div>
            <br />
            <div>
                <h2>These are the countries I visited:</h2>
                <CountryList>
                    {countriesData?.map(country => (
                        <CountryCard key={country.name.common}>
                            <span>{country.flag}</span>
                            <p>{country.name.common}</p>
                        </CountryCard>
                    ))}
                </CountryList>
            </div>
        </PageWrapper>
    );
};
