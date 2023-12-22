import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import { componentKey, setLoadingState } from './HomeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { PAGE_STATE } from '../../libs/constant'
import { getHomeDetails } from './HomeSaga'

const Home = () => {

    const dispatch = useDispatch()
    const { loadingState } = useSelector(state => state[componentKey])

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoadingState({ state: PAGE_STATE.PAGE_READY, message: 'Success' }))
            dispatch(getHomeDetails())
        }, 1000)
    }, [])



    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardBody>
                                <p className='text-muted'>
                                    Use <code>table-responsive</code> class to make any table
                                    responsive across all viewports. Responsive tables allow
                                    tables to be scrolled horizontally with ease.
                                </p>
                                <div className='live-preview'>
                                    <div className='table-responsive'>
                                        <Table className='align-middle table-nowrap mb-0'>
                                            <thead className='table-light'>
                                                <tr>
                                                    <th scope='col' style={{ width: '42px' }}>
                                                        <div className='form-check'>
                                                            <Input className='form-check-input' type='checkbox' defaultValue='' id='responsivetableCheck' />
                                                            <Label className='form-check-label' for='responsivetableCheck' ></Label>
                                                        </div>
                                                    </th>
                                                    <th scope='col'>ID</th>
                                                    <th scope='col'>Date</th>
                                                    <th scope='col'>Status</th>
                                                    <th scope='col'>Customer</th>
                                                    <th scope='col'>Purchased</th>
                                                    <th scope='col'>Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope='row'>
                                                        <div className='form-check'>
                                                            <Input className='form-check-input' type='checkbox' defaultValue='' id='responsivetableCheck01' />
                                                            <Label className='form-check-label' htmlFor='responsivetableCheck01' ></Label>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Link to='#w-medium'>#VZ2110</Link>
                                                    </td>
                                                    <td>10 Oct, 14:47</td>
                                                    <td className='text-success'>
                                                        <i className='ri-checkbox-circle-line fs-17 align-middle'></i>{' '}
                                                        Paid
                                                    </td>
                                                    <td>
                                                        <div className='d-flex gap-2 align-items-center'>
                                                            <div className='flex-grow-1'>
                                                                Jordan Kennedy
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Mastering the grid</td>
                                                    <td>$9.98</td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>
                                                        <div className='form-check'>
                                                            <Input
                                                                className='form-check-input'
                                                                type='checkbox'
                                                                defaultValue=''
                                                                id='responsivetableCheck02'
                                                            />
                                                            <Label
                                                                className='form-check-label'
                                                                htmlFor='responsivetableCheck02'
                                                            ></Label>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <Link to='#' className='fw-medium'>
                                                            #VZ2109
                                                        </Link>
                                                    </td>
                                                    <td>17 Oct, 02:10</td>
                                                    <td className='text-success'>
                                                        <i className='ri-checkbox-circle-line fs-17 align-middle'></i>{' '}
                                                        Paid
                                                    </td>
                                                    <td>
                                                        <div className='d-flex gap-2 align-items-center'>
                                                            <div className='flex-grow-1'>
                                                                Jackson Graham
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Splashify</td>
                                                    <td>$270.60</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className='table-light'>
                                                <tr>
                                                    <td colSpan='6'>Total</td>
                                                    <td>$947.55</td>
                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home
