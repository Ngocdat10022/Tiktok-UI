import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '../../../components/poper'
import styles from './Search.module.scss'
import {
    faCircleXmark,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import * as  searchServices from '../../../Services/searchService';
import { SearchIcon } from '../../../components/Icon';
import { UseDebounce } from '../../../hook';
import Searchresult from './Searchresult';
const cx = classNames.bind(styles)
function Search() {
    const [SearchValue, setSearchValue] = useState('');
    const [Searchresults, setSearchresults] = useState([])
    const [ShowResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const InputRef = useRef()
    const debouncedVlaue = UseDebounce(SearchValue, 500)
    useEffect(() => {
        // exit function 
        if (!debouncedVlaue.trim()) {
            setSearchresults([])
            return;
        }
        setLoading(true)
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedVlaue)
            setSearchresults(result)
            setLoading(false);
        }
        fetchApi();
    }, [debouncedVlaue])
    const handleChange = (e) => {
        const searchValue = e.target.value
        // no space
        if (searchValue.startsWith(' ')) {
            return
        }
        setSearchValue(searchValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
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
                        <Searchresult Searchresults={Searchresults} />
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
                    onChange={handleChange}
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
                <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;