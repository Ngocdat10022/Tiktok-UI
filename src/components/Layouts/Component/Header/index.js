import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '../../../../assets/Images';
import { Wrapper as PoperWrapper } from '../../../poper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AcountItem from '../../../accounttem';
import Button from '../../../Button';
const cx = classNames.bind(styles)
function Header() {
    const [Searchresults, setSearchresults] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchresults([]);
        }, 0)
    }, [])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok' />
            </div>
            <Tippy
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
            </Tippy>
            <div className={cx('action')}>
                <Button text>Upload</Button>
                <Button primary rightIcon={ <FontAwesomeIcon icon={faArrowRightToBracket} />} >Log in</Button>
            </div>
        </div>
    </header>
}

export default Header;