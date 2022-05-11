import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import { Wrapper as PoperWrapper } from '../../poper'
import Tippy from "@tippyjs/react/headless";
import Menuitems from "./Menuitem";
const cx = classNames.bind(styles)
function Menu({ children, items }) {
    // function renderItems(items) {
    //     items.map((item, index) => {
    //         return <Menuitems key={index} data={item} />
    //     })
    // }
    return (
        <Tippy
            interactive
            delay={[0, 1000]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} aria-expanded="true" tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-poper')}>
                        {items.map((item, index) => {
                            return <Menuitems key={index} data={item} />
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