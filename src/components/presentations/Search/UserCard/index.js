import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.scss";
import {Skeleton, Card, Avatar, Empty} from "antd";
import UserCardDescription from "./Description";
import _ from "lodash";

const {Meta} = Card;

/**
 *
 * @param {IUserState} user
 * @return {*}
 * @constructor
 */
const UserCard = ({user}) => {
    const {data, isLoading, error} = user;

    if (!isLoading && !!error) {
        return (
            <div className={styles.wrap}>
                <Empty />
            </div>
        );
    }

    if (!isLoading && _.isEmpty(user.data)) {
        return null;
    }

    return (
        <div className={styles.wrap}>
            <Card>
                <Skeleton loading={isLoading} active>
                    <Meta
                        avatar={<Avatar src={data.avatar_url} />}
                        title={data.name}
                        description={<UserCardDescription user={user} />}
                    />
                </Skeleton>
            </Card>
        </div>
    );
};

export default UserCard;

UserCard.propTypes = {
    user: PropTypes.object,
};
