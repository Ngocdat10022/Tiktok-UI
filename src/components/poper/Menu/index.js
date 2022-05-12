import { useState } from "react";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import { Wrapper as PoperWrapper } from '../../poper'
import Tippy from "@tippyjs/react/headless";
import Menuitems from "./Menuitem";
import Header from "./Header";
const cx = classNames.bind(styles)
function Menu({ children, items, onChange }) {
    const [History, setHistory] = useState([{ data: items }])
    // console.log(History);
    const current = History[History.length - 1]

    return (
        <Tippy
            interactive
            // animation='fade'
            delay={[0, 1000]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} aria-expanded="true" tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-popper')}>
                        {History.length > 1 ? <Header title='language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} /> : ''}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children
                            return <Menuitems key={index} data={item} onClick={() => {
                                if (isParent) {
                                    setHistory(prev =>
                                        [
                                            ...prev,
                                            item.children
                                        ]
                                    )
                                } else {
                                    onChange(item)
                                }
                            }} />
                        })}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;