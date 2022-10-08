import React from 'react';
import classNames from 'classnames/bind';
import styles from "./SuggetedAccounts.nodule.scss"
import PropTypes from 'prop-types'
import AccountItem from './AccountItem';
const cx = classNames.bind(styles)
const SuggetedAccounts = (props) => {
    const { label } = props
    return (
        <div className={cx("wrapper")}>
            <p className={cx("label")}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
};
SuggetedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}
export default SuggetedAccounts;




