import React, {useState} from "react";
import Search from "../../presentations/Search";
import axios from "axios";
import _ from "lodash";

/**
 * @typedef IUser
 * @property {number} id
 * @property {?string} name
 * @property {string} login
 * @property {?string} company
 * @property {?string} email
 * @property {?number} followers
 * @property {string} updated_at
 * @property {?string} avatar_url
 */

/**
 * @typedef IUserState
 * @property {IUser | {}} data
 * @property {boolean} isLoading
 * @property {?object} error

 */

const SearchContainer = () => {
    /**
     *
     * @type {IUserState}
     */
    const initialStateUser = {
        data: {},
        isLoading: false,
        error: null,
    };
    const [user, setUser] = useState(initialStateUser);

    const onSearchUser = value => {
        setUser(initialStateUser);
        handleSearchUser({setUser, initialStateUser, searchValue: value});
    };
    const onSearchDebounce = _.debounce(onSearchUser, 1000);

    return <Search onSearchDebounce={onSearchDebounce} onSearchUser={onSearchUser} user={user} />;
};

export default SearchContainer;

/**
 *
 * @param {function} setUser
 * @param {IUserState} initialStateUser
 * @param {string} searchValue
 */
const handleSearchUser = ({setUser, initialStateUser, searchValue}) => {
    if (!searchValue) {
        setUser(initialStateUser);
        return;
    }

    apiGetUser({searchValue, setUser});
};

/**
 *
 * @param {string} searchValue
 * @param {function} setUser
 */
const apiGetUser = ({searchValue, setUser}) => {
    setUser(prev => ({...prev, isLoading: true, error: null}));
    axios
        .get(`https://api.github.com/users/${searchValue}`)
        .then(res => {
            setUser(prev => ({...prev, isLoading: false, error: null, data: {...prev.data, ...res.data}}));
            return res;
        })
        .catch(error => {
            setUser(prev => ({...prev, isLoading: false, error}));
            throw error;
        });
};
