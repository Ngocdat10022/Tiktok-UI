import { HeaderOnly } from '../components/Layouts'
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile'
import Upload from '../pages/upload'
import Search from '../pages/Search';
import routes from '../config';
const publicRouter = [
    {
        path: routes.home,
        component: Home
    },
    {
        path: routes.following,
        component: Following
    },
    {
        path: routes.profile,
        component: Profile
    },
    {
        path: routes.upload,
        component: Upload,
        Layout: HeaderOnly
    },
    {
        path: routes.search,
        component: Search,
        Layout: null
    },
]

const privateRouter = [

]

export { publicRouter, privateRouter }