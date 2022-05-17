import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import AcountItem from '../../../accounttem';
import { Wrapper as PoperWrapper } from '../../../poper'
import styles from './Search.module.scss'
import {
    faCircleXmark,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { SearchIcon } from '../../../Icon';
const cx = classNames.bind(styles)
function Search() {
    const [SearchValue, setSearchValue] = useState('');
    const [Searchresults, setSearchresults] = useState([])
    const [ShowResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const InputRef = useRef()
    useEffect(() => {
        // exit function 
        if (!SearchValue.trim()) {
            setSearchresults([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(SearchValue)}&type=less`)
            .then(res => res.json())
            .then((res) => {
                setSearchresults(res.data);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [SearchValue])
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
                        {Searchresults.map((result) => {
                            return <AcountItem key={result.id} data={result} />
                        })}
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
                    onChange={e => {
                        setSearchValue(e.target.value);
                        // setSearchresults(SearchValue);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!SearchValue && !loading && (
                    <button onClick={() => {
                        setSearchValue('')
                        setSearchresults([])
                        InputRef.current.focus();
                    }}
                        className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;