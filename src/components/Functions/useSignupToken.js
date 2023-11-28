import { useEffect, useState } from 'react';
import axios from 'axios';

const useSignupToken = () => {
    const [signupToken, setSignupToken] = useState('');

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get('http://13.113.206.129:8081/user/signup-token');
                const signupToken = response.data.signupToken;
                sessionStorage.setItem('signupToken', signupToken);
                setSignupToken(signupToken);
            } catch (error) {
                console.error('Error fetching signup token:', error);
            }
        };

        fetchToken();
    }, []);

    return signupToken;
};

export default useSignupToken;