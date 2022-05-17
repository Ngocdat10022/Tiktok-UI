import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '../../../../assets/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import Button from '../../../Button';
import Menu from '../../../poper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../Icon';
import Image from '../../../Images'
import Search from '../Search';
const cx = classNames.bind(styles)
function Header() {
    const curent = true;
    const hanldMenuChange = (menuItem) => {
        console.log(menuItem);
    }
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Engligh',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'TiengViet'
                    }
                ]
            }
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const UserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok' />
            </div>
            {/* Search */}
            <Search />
            <div className={cx('action')}>
                {curent ?
                    <>
                        <Tippy content='Up loadvideo' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy content='Message' placement='bottom'>
                            <button className={cx('action-btn')}><MessageIcon /> </button>
                        </Tippy>
                        <Tippy content='Inbox' placement='bottom'>
                            <button className={cx('action-btn')}><InboxIcon /> </button>
                        </Tippy>
                    </> :
                    <>
                        <Button text>Upload</Button>
                        <Button primary rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />} >Log in</Button>
                    </>
                }
                <Menu items={curent ? UserMenu : MENU_ITEMS} onChange={hanldMenuChange}>
                    {curent ?
                        (<Image
                            src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e86867bdcd0d0fa4649f4731b60677ad~c5_100x100.jpeg?x-expires=1652583600&x-signature=0%2FY46G0V3BSIYpMdatCBdXFUkxU%3D'
                            className={cx('user-avatar')}
                            alt='phuong hoa'
                        // fallback="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                        />)
                        :
                        (<button className={cx('more-btn')}><FontAwesomeIcon icon={faEllipsisVertical} /></button>)}
                </Menu>
            </div>
        </div >
    </header >
}
export default Header;