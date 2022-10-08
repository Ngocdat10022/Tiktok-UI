import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from "./SuggetedAccounts.nodule.scss"
const cx = classNames.bind(styles)
const AccountItem = () => {
    return (
        <div className={cx("account-item")}>
            <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661526000&x-signature=wz0RJIk670SwcIIJ%2BROHURw1kzk%3D" alt="avatar" />
            <div className={cx("item-info")}>
                <p className={cx("nickname")}>
                    <strong>huynhngocdat</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </p>
                <p className={cx("name")}>Huỳnh Ngọc Đạt</p>
            </div>
        </div>
    );
};
AccountItem.prototype = {

}
export default AccountItem;