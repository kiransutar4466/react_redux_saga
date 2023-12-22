import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { BiAtom } from 'react-icons/bi'
import { AiFillBug } from 'react-icons/ai'
import { AiFillBuild } from 'react-icons/ai'
import { AiFillDropboxCircle } from 'react-icons/ai'

const NavData = () => {
    const [isSchedule, setIsSchedule] = useState(true)
    const [isStaff, setIsStaff] = useState(false)
    const [isInvoices, setIsInvoices] = useState(false)
    const [isAccount, setIsAccount] = useState(false)
    const [isCurrentState, setIsCurrentState] = useState('Schedule')

    useEffect(() => {
        if (isCurrentState !== 'Schedule') {
            setIsSchedule(false)
        }
        if (isCurrentState !== 'Staff') {
            setIsStaff(false)
        }
        if (isCurrentState !== 'Invoices') {
            setIsInvoices(false)
        }
        if (isCurrentState !== 'Account') {
            setIsAccount(false)
        }
    }, [isSchedule, isStaff, isInvoices, isAccount, isCurrentState])

    const menuItems = [
        {
            label: 'Menu',
            isHeader: true
        },
        {
            id: 'Schedule',
            label: 'Schedule',
            icon: <BiAtom />,
            link: '/home',
            click: function () {
                setIsSchedule(!isSchedule)
                setIsCurrentState('Schedule')
            },
            subItems: [
                {
                    id: 'Cart',
                    label: 'Cart',
                    link: '/cart',
                    parentId: 'Schedule'
                },
                {
                    id: 'Home',
                    label: 'Home',
                    link: '/home',
                    parentId: 'Schedule'
                }
            ],
            stateVariables: isSchedule
        },
        {
            id: 'Staff',
            label: 'Staff',
            icon: <AiFillBug />,
            link: '/PM/staff',
            click: function () {
                setIsSchedule(!isStaff)
                setIsCurrentState('Staff')
            },
            stateVariables: isStaff
        },
        {
            id: 'Invoices',
            label: 'Invoices',
            icon: <AiFillBuild />,
            link: '/PM/Invoices',
            click: function () {
                setIsSchedule(!isInvoices)
                setIsCurrentState('Invoices')
            },
            stateVariables: isInvoices
        },
        {
            id: 'Account',
            label: 'Account',
            icon: <AiFillDropboxCircle />,
            link: '/PM/settings',
            click: function () {
                setIsSchedule(!isAccount)
                setIsCurrentState('Account')
            },
            stateVariables: isAccount
        }
    ]
    return <React.Fragment>{menuItems}</React.Fragment>
}

export default NavData
