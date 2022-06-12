import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from './accountltem.module.scss'
import Images from "../Images";
import { Link } from "react-router-dom"
const cx = classNames.bind(styles)
function AcountItem({ data }) {
    return <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Images className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </Link>
}

AcountItem.prototype = {
    data: PropTypes.object.isRequired
}

export default AcountItem;