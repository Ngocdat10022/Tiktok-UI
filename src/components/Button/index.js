import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles)

function Button({
    to,
    href,
    onClick,
    disabled = false,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    children }) {
    let Comp = 'button'

    const props = { onClick }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    })
    return <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
}
Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button;