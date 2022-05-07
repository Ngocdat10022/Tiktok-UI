import { HeaderOnly } from '../components/Layouts'
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile'
import Upload from '../pages/upload'
import Search from '../pages/Search';
const publicRouter = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/upload',
        component: Upload,
        Layout: HeaderOnly
    },
    {
        path: '/search',
        component: Search,
        Layout: null
    },
]

const privateRouter = [

]

export { publicRouter, privateRouter }