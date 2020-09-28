import React, {useState} from "react";
import Search from "../../presentations/Search";
import _ from "lodash";
import {apiGetUser} from "../../../utils/services";

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
    setUser(prev => ({...prev, isLoading: true, error: null}));
    apiGetUser({searchValue})
        .then(res => {
            setUser(prev => ({...prev, isLoading: false, error: null, data: {...prev.data, ...res.data}}));
        })
        .catch(error => {
            setUser(prev => ({...prev, isLoading: false, error}));
        });
};
