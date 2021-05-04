import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    const [state, setstate] = useState({data:null, loading: true, error: null});

    const isMounter = useRef(true);

    useEffect(() => {
        return () => {
            isMounter.current = false;
        }
    }, [])


    useEffect(() => {

        
        setstate({ data:null, loading: true, error: null});
        
        fetch( url )
        .then( resp => resp.json())
        .then( data => {
            if(isMounter.current) {
                setTimeout(() => {
                    
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }, 4000);
            }
        })
        
    }, [url]);

    return state;

}
