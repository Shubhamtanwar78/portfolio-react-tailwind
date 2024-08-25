import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const rightDiv = document.getElementById('right-div');
        if (rightDiv) {
            rightDiv.scrollTop = 0;
        }
    }, [pathname]);

    return children || null;
};

export default ScrollToTop;
