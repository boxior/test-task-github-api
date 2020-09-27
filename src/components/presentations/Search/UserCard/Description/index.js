import PropTypes from "prop-types";
import {List} from "antd";
import styles from "./index.module.scss";
import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";

/**
 *
 * @param {{data: IUser}} user
 * @return {*}
 * @constructor
 */
const UserCardDescription = ({user}) => {
    const {company, email, followers, updated_at, login} = user.data;
    return (
        <List>
            <List.Item>
                <span className={styles.title}>Company: </span>
                <span className={styles.value}>{company}</span>
            </List.Item>
            <List.Item>
                {" "}
                <span className={styles.title}>Email: </span>
                <span className={styles.value}>{email}</span>
            </List.Item>
            <List.Item>
                {" "}
                <span className={styles.title}>Followers: </span>
                <span className={styles.value}>{followers}</span>
            </List.Item>
            <List.Item>
                {" "}
                <span className={styles.title}>Updated at: </span>
                <span className={styles.value}>{moment(updated_at).format("LLL")}</span>
            </List.Item>
            <List.Item>
                <Link to={`/search/${login}/repos`}>Repos</Link>
            </List.Item>
        </List>
    );
};

export default UserCardDescription;

UserCardDescription.propTypes = {
    user: PropTypes.object,
};
