import PropTypes from 'prop-types';
import { useState } from "react";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import { Wrapper as PoperWrapper } from '../../poper'
import Tippy from "@tippyjs/react/headless";
import Menuitems from "./Menuitem";
import Header from "./Header";
const cx = classNames.bind(styles)
function Menu({ children, items, hideOnClick = false, onChange }) {
    const [History, setHistory] = useState([{ data: items }])
    // console.log(History);
    const current = History[History.length - 1]
    // console.log(current);
    const handlResetToFisrtPage = () => { setHistory(prev => prev.slice(0, 1)) }
    const handlBack = () => {
        // console.log(History.slice(0, History.length - 1));
        setHistory(History.slice(0, History.length - 1))
    }

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 1000]}
            offset={[10, 10]}
            placement='bottom-end'
            onHide={handlResetToFisrtPage}
            render={attrs => (
                <div className={cx('content')} aria-expanded="true" tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-popper')}>
                        {History.length > 1 ? <Header title='language' onBack={handlBack} /> : ''}
                        <div className={cx("menu-body")} >
                            {current.data.map((item, index) => {
                                const isParent = !!item.children
                                return <Menuitems key={index} to={item.to} data={item} onClick={() => {
                                    if (isParent) {
                                        setHistory(prev => [...prev, item.children])
                                    } else {
                                        onChange(item)
                                    }
                                }} />
                            })}
                        </div>
                    </PoperWrapper >
                </div >
            )}

        >
            {children}
        </Tippy >
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func
}
export default Menu;