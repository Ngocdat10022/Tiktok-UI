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
    const current = History[History.length - 1]
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 1000]}
            offset={[10, 10]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} aria-expanded="true" tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-popper')}>
                        {History.length > 1 ? <Header title='language' onBack={() => {
                            // console.log(History.slice(0, History.length - 1));
                            setHistory(History.slice(0, History.length - 1))
                        }} /> : ''}
                        <div className={cx("menu-body")} >
                            {current.data.map((item, index) => {
                                const isParent = !!item.children
                                // console.log(isParent);
                                return <Menuitems key={index} to={item.to} data={item} onClick={() => {
                                    if (isParent) {
                                        setHistory(prev => [...prev, item.children])
                                    }
                                }} />
                            })}
                        </div>
                    </PoperWrapper >
                </div >
            )}
            onHide={() => { setHistory(prev => prev.slice(0, 1)) }}
        >
            {children}
        </Tippy >
    );
}

export default Menu;