import { useEffect } from 'react';

const ApiAuth = () => {
    useEffect(() => {
        const authApi = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/authentication', {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00', // Replace with your API key
                    'accept': 'application/json',
                },
                });

                if (response.ok) {
                const result = await response.json();
                //console.log(result);
                } else {
                console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        authApi();
    }, []);
}

export default ApiAuth;