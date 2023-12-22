import React from 'react'
import { Collapse } from 'reactstrap'
import { Link } from 'react-router-dom'
import NavData from '../LayoutMenuData'
import { HiMinusSm } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'

const VerticalLayout = props => {
    const navData = NavData().props.children

    return (
        <React.Fragment>
            {(navData || []).map((item, key) => {
                return (
                    <React.Fragment key={key}>
                        {item['isHeader'] ? (
                            <li className='menu-title'>
                                <span data-key='t-menu'>{item.label} </span>
                            </li>
                        ) : (
                            <li className='nav-item'>
                                <Link
                                    onClick={item.click}
                                    className='nav-link menu-link'
                                    to={item.link}
                                    data-bs-toggle='collapse'
                                >
                                    <div>{item.icon}</div>
                                    <span data-key='t-apps' className='ms-2'>
                                        {item.label}
                                    </span>
                                    {item.subItems && (
                                        <HiChevronDown className='arrow-logo float-right' />
                                    )}
                                </Link>
                                <Collapse
                                    className='menu-dropdown'
                                    isOpen={item.stateVariables}
                                    id='sidebarApps'
                                >
                                    <ul className='nav nav-sm flex-column test'>
                                        {/* subItms  */}
                                        {item.subItems &&
                                            (item.subItems || []).map((subItem, key) => (
                                                <React.Fragment key={key}>
                                                    {!subItem.isChildItem ? (
                                                        <li className='nav-item'>
                                                            <Link
                                                                to={subItem.link ? subItem.link : '/#'}
                                                                className='nav-link'
                                                            >
                                                                <HiMinusSm className='label-class' />
                                                                <span className='ms-3 label-class'>
                                                                    {subItem.label}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li className='nav-item'>
                                                            <Link
                                                                onClick={subItem.click}
                                                                className='nav-link'
                                                                to='/#'
                                                                data-bs-toggle='collapse'
                                                            >
                                                                {' '}
                                                                {props.t(subItem.label)}
                                                            </Link>
                                                            <Collapse
                                                                className='menu-dropdown collapse show'
                                                                in={subItem.stateVariables}
                                                                id='sidebarApps'
                                                            >
                                                                <ul className='nav nav-sm flex-column'>
                                                                    {/* child subItms  */}
                                                                    {subItem.childItems &&
                                                                        (subItem.childItems || []).map(
                                                                            (childItem, key) => (
                                                                                <React.Fragment key={key}>
                                                                                    {!childItem.childItems ? (
                                                                                        <li className='nav-item'>
                                                                                            <Link
                                                                                                to={
                                                                                                    childItem.link
                                                                                                        ? childItem.link
                                                                                                        : '/#'
                                                                                                }
                                                                                                className='nav-link'
                                                                                            >
                                                                                                {childItem.label}
                                                                                            </Link>
                                                                                        </li>
                                                                                    ) : (
                                                                                        <li className='nav-item'>
                                                                                            <Link
                                                                                                to='/#'
                                                                                                className='nav-link'
                                                                                                onClick={childItem.click}
                                                                                                data-bs-toggle='collapse'
                                                                                            >
                                                                                                {childItem.label}{' '}
                                                                                                <span
                                                                                                    className='badge badge-pill bg-danger'
                                                                                                    data-key='t-new'
                                                                                                >
                                                                                                    New
                                                                                                </span>
                                                                                            </Link>
                                                                                            <Collapse
                                                                                                className='menu-dropdown'
                                                                                                in={childItem.stateVariables}
                                                                                                id='sidebaremailTemplates'
                                                                                            >
                                                                                                <ul className='nav nav-sm flex-column'>
                                                                                                    {childItem.childItems.map(
                                                                                                        (subChildItem, key) => (
                                                                                                            <li
                                                                                                                className='nav-item'
                                                                                                                key={key}
                                                                                                            >
                                                                                                                <Link
                                                                                                                    to={subChildItem.link}
                                                                                                                    className='nav-link'
                                                                                                                    data-key='t-basic-action'
                                                                                                                >
                                                                                                                    {subChildItem.label}{' '}
                                                                                                                </Link>
                                                                                                            </li>
                                                                                                        )
                                                                                                    )}
                                                                                                </ul>
                                                                                            </Collapse>
                                                                                        </li>
                                                                                    )}
                                                                                </React.Fragment>
                                                                            )
                                                                        )}
                                                                </ul>
                                                            </Collapse>
                                                        </li>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                    </ul>
                                </Collapse>
                            </li>
                        )}
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default VerticalLayout
