import styles from './SiderBar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Siderbar() {
    return <aside className={cx('wrapper')}>
        <h2>siderbar</h2>
    </aside>
}

export default Siderbar;