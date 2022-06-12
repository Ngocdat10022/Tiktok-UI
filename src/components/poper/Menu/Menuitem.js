import PropTypes from 'prop-types';
import Button from "../../Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function Menuitems({ data, onClick, to }) {
    const classe = cx('menu-item', {
        separate: data.separate
    })
    return <Button to={to} onClick={onClick} className={classe} leftIcon={data.icon}>{data.title} </Button>

}
Menuitems.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
}
export default Menuitems;