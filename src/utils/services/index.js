import axios from "axios";

/**
 * Fetch user repos
 * @param {IUser.login} login
 */
export const apiGetRepos = ({login}) => {
    return (
        axios
            /**
             *  Retrieve 100 not private repositories. 100 is a max number per page. Realization without pagination on server side.
             */
            .get(`https://api.github.com/users/${login}/repos?per_page=100`)
    );
};
/**
 *
 * @param {string} login
 */
export const apiGetUser = ({login}) => {
    return axios.get(`https://api.github.com/users/${login}`);
};
