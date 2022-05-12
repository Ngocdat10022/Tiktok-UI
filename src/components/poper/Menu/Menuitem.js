import Button from "../../Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function Menuitems({ data, onClick }) {
    return <Button className={cx('menu-item')} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>

}

export default Menuitems;