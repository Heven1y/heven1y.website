import React from "react";

import styles from './PageTabMenu.module.scss'
import classNames from "classnames";

type PropsPageTabMenu = {
    onClick?: () => void
    active?: boolean
    title: string
}

export default function PageTabMenu(props: PropsPageTabMenu) {

    const classPageTabMenu = classNames({
        [styles["page-tab-menu"]]: !props.active,
        [styles["page-tab-menu--active"]]: props.active,
    })

    return (
        <div onClick={props.onClick} className={classPageTabMenu}>
            {props.title}
        </div>
    )
}