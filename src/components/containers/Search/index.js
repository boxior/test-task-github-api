import React, {useState} from "react";
import Search from "../../presentations/Search";
import axios from "axios";
import _ from "lodash";

const mockUser = {
    avatar_url: "https://avatars0.githubusercontent.com/u/27147568?v=4",
    bio: null,
    blog: "",
    company: null,
    created_at: "2017-04-09T15:18:59Z",
    email: null,
    events_url: "https://api.github.com/users/boxior/events{/privacy}",
    followers: 1,
    followers_url: "https://api.github.com/users/boxior/followers",
    following: 0,
    following_url: "https://api.github.com/users/boxior/following{/other_user}",
    gists_url: "https://api.github.com/users/boxior/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/boxior",
    id: 27147568,
    location: null,
    login: "boxior",
    name: "Serhii",
    node_id: "MDQ6VXNlcjI3MTQ3NTY4",
    organizations_url: "https://api.github.com/users/boxior/orgs",
    public_gists: 0,
    public_repos: 39,
    received_events_url: "https://api.github.com/users/boxior/received_events",
    repos_url: "https://api.github.com/users/boxior/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/boxior/starred{/,owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/boxior/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "2020-09-26T09:39:12Z",
    url: "https://api.github.com/users/boxior",
};

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
 * @property {IUser} data
 * @property {boolean} isLoading
 * @property {?object} error

 */

const SearchContainer = () => {
    /**
     *
     * @type {IUserState}
     */
    const initialStateUser = {
        data: mockUser,
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
