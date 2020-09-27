import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.scss";
import {Input} from "antd";
import classNames from "classnames";
import UserCard from "./UserCard";

/**
 *
 * @param {function} onSearchDebounce
 * @param {IUserState} user
 * @return {*}
 * @constructor
 */
const Search = ({onSearchDebounce, user}) => {
    const onChange = e => {
        onSearchDebounce(e.currentTarget.value);
    };

    return (
        <div className={classNames(styles.page, styles.wrap)}>
            <div className={styles.wrapInput}>
                <Input placeholder={"Github login..."} onChange={onChange} />
            </div>
            <UserCard user={user} />
        </div>
    );
};

export default Search;

Search.propTypes = {
    onSearchDebounce: PropTypes.func,
    user: PropTypes.object,
};
