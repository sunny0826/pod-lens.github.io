import { useEffect } from 'react'

const Asciinema = ({ url }) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return null
}

export default Asciinema
