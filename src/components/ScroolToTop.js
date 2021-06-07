import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScroolToTop() {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scroll(0,0)
    },
    [pathname]);

    return null;
}