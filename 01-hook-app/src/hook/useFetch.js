import React, { useEffect } from 'react'

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
    return {
        data, 
        isLoading,
        hasError,
    };
}
