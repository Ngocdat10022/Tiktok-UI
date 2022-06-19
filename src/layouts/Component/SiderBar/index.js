import styles from './SiderBar.module.scss'
import config from '../../../config';
import classNames from 'classnames/bind';
import Menu from './Menu';
import { MenuItem } from "./Menu"
import { HomeIcon, LiveIcon, FllowingIcon, HomeActiveIcon, FllowingActiveIcon, LiveActiveIcon } from '../../../components/Icon';
const cx = classNames.bind(styles)
function Siderbar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} iconActve={<HomeActiveIcon />} />
            <MenuItem title="Fllowing" to={config.routes.following} icon={<FllowingIcon />} iconActve={<FllowingActiveIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActve={<LiveActiveIcon />} />
        </Menu>
    </aside>
}

export default Siderbar;