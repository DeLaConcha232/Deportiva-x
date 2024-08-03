import { useEffect } from 'react';

const useTawkTo = () => {
    useEffect(() => {
        // Cargar el script de Tawk.to
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = 'https://embed.tawk.to/66ad849b1601a2195ba03b6e/1i4ass06m';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s1.onload = () => {
            console.log("Tawk.to script loaded");
        };
        document.head.appendChild(s1);

        return () => {
            document.head.removeChild(s1);
        };
    }, []);
};

export default useTawkTo;
