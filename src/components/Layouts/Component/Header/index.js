import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '../../../../assets/Images';
import { Wrapper as PoperWrapper } from '../../../poper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faArrowRightToBracket,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import AcountItem from '../../../accounttem';
import Button from '../../../Button';
import Menu from '../../../poper/Menu';
const cx = classNames.bind(styles)
function Header() {
    const [Searchresults, setSearchresults] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchresults([]);
        }, 0)
    }, [])
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
            <HeadlessTippy
                interactive
                visible={Searchresults.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} aria-expanded="true" tabIndex="-1" {...attrs}>
                        <PoperWrapper >
                            <h4 className={cx('search-title')}>
                                Acount
                            </h4>
                            <AcountItem />
                            <AcountItem />
                            <AcountItem />
                            <AcountItem />
                        </PoperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='search accounts and videos ' spellCheck={false} />
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /> </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
            <div className={cx('action')}>
                {curent ?
                    <>
                        <Tippy content='Up loadvideo' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                            </button>
                        </Tippy>
                        <button className={cx('action-btn')}><FontAwesomeIcon icon={faMessage} /></button>
                    </> :
                    <>
                        <Button text>Upload</Button>
                        <Button primary rightIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />} >Log in</Button>
                    </>
                }
                <Menu items={curent ? UserMenu : MENU_ITEMS} onChange={hanldMenuChange}>
                    {curent ?
                        (<img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e86867bdcd0d0fa4649f4731b60677ad~c5_100x100.jpeg?x-expires=1652583600&x-signature=0%2FY46G0V3BSIYpMdatCBdXFUkxU%3D' className={cx('user-avatar')} alt='phuong hoa' />)
                        :
                        (<button className={cx('more-btn')}><FontAwesomeIcon icon={faEllipsisVertical} /></button>)}
                </Menu>
            </div>
        </div >
    </header >
}
export default Header;