import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.scss";
import {Empty, Skeleton, Table} from "antd";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => sortString({a, b, key: "name"}),
        defaultSortOrder: "ascend",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: (a, b) => sortString({a, b, key: "description"}),
    },
    {
        title: "Url",
        dataIndex: "html_url",
        key: "html_url",
        sorter: (a, b) => sortString({a, b, key: "html_url"}),
    },
    {
        title: "Forks count",
        dataIndex: "forks_count",
        key: "forks_count",
        sorter: (a, b) => sortNumber({a, b, key: "forks_count"}),
    },
    {
        title: "Watchers count",
        dataIndex: "watchers_count",
        key: "watchers_count",
        sorter: (a, b) => sortNumber({a, b, key: "watchers_count"}),
    },
];

/**
 *
 * @param {IRepoState} repos
 * @return {*}
 * @constructor
 */
const UserRepos = ({repos}) => {
    if (!repos.isLoading && !!repos.error) {
        return <Empty />;
    }

    const dataSource = Object.values(repos.data).map(repo => ({...repo, key: repo.id}));

    return (
        <div className={styles.page}>
            <Skeleton loading={repos.isLoading} active>
                <Table columns={columns} dataSource={dataSource} className={styles.table} />
            </Skeleton>
        </div>
    );
};

export default UserRepos;

UserRepos.propTypes = {
    repos: PropTypes.object,
};

/**
 * Handle string sort
 * @param {object} a
 * @param {object} b
 * @param {string} key
 * @return {number}
 */
const sortString = ({a, b, key}) => {
    const aStr = typeof a[key] === "string" ? a[key] : "";
    const bStr = typeof b[key] === "string" ? b[key] : "";

    return aStr.localeCompare(bStr);
};

/**
 * Handle number sort
 * @param {object} a
 * @param {object} b
 * @param {string} key
 * @return {number}
 */
const sortNumber = ({a, b, key}) => {
    const aNum = typeof a[key] === "number" ? a[key] : 0;
    const bNum = typeof b[key] === "number" ? b[key] : 0;

    return aNum - bNum;
};
