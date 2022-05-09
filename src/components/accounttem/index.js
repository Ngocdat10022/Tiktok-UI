import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from './accountltem.module.scss'
const cx = classNames.bind(styles)
function AcountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://png.pngtree.com/png-vector/20190130/ourlar…ee-cute-girl-avatar-material-png-image_678035.jpg" alt="img" />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>ngọc đạt</span>
                <FontAwesomeIcon icon={faCheckCircle} />
            </p>
            <span className={cx('username')}></span>
        </div>
    </div>
}

export default AcountItem;