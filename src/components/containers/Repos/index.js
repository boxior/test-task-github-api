import React, {useEffect, useState} from "react";
import Repos from "../../presentations/Repos";
import {useParams} from "react-router-dom";
import {apiGetRepos} from "../../../utils/services";

/**
 * @typedef IRepo
 * @property {number} id
 * @property {?string} name
 * @property {?string} description
 * @property {?string} url
 * @property {?number} forks_count
 * @property {?number} watchers_count
 */

/**
 *
 * @typedef IRepoState
 * @property {{[number]: IRepo}} data
 * @property {boolean} isLoading
 * @property {?object} error
 */

const ReposContainer = () => {
    const params = useParams();

    /**
     *
     * @type {IRepoState}
     */
    const initialRepos = {
        data: {},
        isLoading: false,
        error: null,
    };
    const [repos, setRepos] = useState(initialRepos);

    useEffect(() => {
        handleGetRepos({login: params.login, setRepos});
    }, [params.login]);

    return <Repos repos={repos} />;
};

export default ReposContainer;

/**
 * Handle get user repos
 * @param {IUser.login} login
 * @param {function} setRepos
 */
const handleGetRepos = ({login, setRepos}) => {
    if (!login) {
        return;
    }
    setRepos(prev => ({...prev, isLoading: true, error: null}));
    apiGetRepos({login})
        .then(res => {
            setRepos(prev => ({...prev, isLoading: false, error: null, data: {...prev.data, ...res.data}}));
        })
        .catch(error => {
            setRepos(prev => ({...prev, isLoading: false, error}));
        });
};
