import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import AcountItem from '../../../accounttem';
import { Wrapper as PoperWrapper } from '../../../poper'
import styles from './Search.module.scss'
import {
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { SearchIcon } from '../../../Icon';
const cx = classNames.bind(styles)
function Search() {
    const [Searchresults, setSearchresults] = useState([])
    const [SearchValue, setSearchValue] = useState([]);
    const [ShowResult, setShowResult] = useState(true);
    const InputRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setSearchresults([1, 2, 3]);
        }, 0)
    }, [])
    return (
        <HeadlessTippy
            interactive
            visible={ShowResult && Searchresults.length > 0}
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
            onClickOutside={() => {

                setShowResult(false)
            }}
        >
            <div className={cx('search')}>
                <input
                    ref={InputRef}
                    value={SearchValue}
                    placeholder='search accounts and videos '
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                {!!SearchValue && (
                    <button onClick={() => {
                        setSearchValue('')
                        setSearchresults([])
                        InputRef.current.focus();
                    }} className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /> </button>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;