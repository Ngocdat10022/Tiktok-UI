import { HeaderOnly } from '../layouts'
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile'
import Upload from '../pages/upload'
import Search from '../pages/Search';
import config from '../config';
const publicRouter = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.following,
        component: Following
    },
    {
        path: config.routes.profile,
        component: Profile
    },
    {
        path: config.routes.upload,
        component: Upload,
        Layout: HeaderOnly
    },
    {
        path: config.routes.search,
        component: Search,
        Layout: null
    },
]

const privateRouter = [

]

export { publicRouter, privateRouter }