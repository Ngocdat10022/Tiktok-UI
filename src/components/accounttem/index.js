import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from './accountltem.module.scss'
import Images from "../Images";
const cx = classNames.bind(styles)
function AcountItem({ data }) {
    return <div className={cx('wrapper')}>
        <Images className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </div>
}

export default AcountItem;