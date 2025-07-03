import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { adminDepositAmount, userProfile } from '../apis/UsersApi';

export default function UserProfile() {
    const location = useLocation();
    const { id } = location.state || {};
    const [loadingShow, setLoadingShow] = useState(false);
    const [data, setData] = useState({});

    const getUserProfile = async () => {
        setLoadingShow(true);
        const success = await userProfile(id);
        if (success === false) {
            setLoadingShow(false);
        }
        if (success) {
            setData(success);
            setLoadingShow(false);
        }
    }
    const handleAddAmount = async (e) => {
        e.preventDefault();
        setLoadingShow(true);
        const formData = new FormData(e.target);

        const success = await adminDepositAmount(formData);
        if (success === false) {
            setLoadingShow(false);
        }
        if (success) {
            getUserProfile();
            setLoadingShow(false);
        }
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-12 column_title">
                    <div className="page_title">
                        <h2>Users Profile</h2>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="mb-2">User Details</h5>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Full Name :<b>{data?.full_name}</b></p>
                                    <p className='mb-1'>Email :<b> {data?.email}</b></p>
                                    <p className='mb-1'>Refer Code: <b>{data?.referer_code}</b></p>
                                    <p className='mb-1'>Refer_counter: <b> 1 </b></p>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'> UserName :<b> {data?.username}</b></p>
                                    <p className='mb-1'>Mobile :<b>{data?.mobile}</b></p>
                                    <p className='mb-1'>Referer:
                                        <b>
                                            {data?.my_refer_code}
                                            <i className="fa fa-edit ms-2" />
                                        </b></p>
                                    <p className='mb-1'> Kyc_status: <b>
                                        {data?.kyc_status == 0 ? (
                                            <span className="text-success">Complete</span>
                                        ) : (
                                            <span className="text-danger"> Not Verified</span>
                                        )}
                                    </b></p>
                                </div>

                                <div className="col-12">
                                    <hr />
                                </div>
                                <div className="col-12 d-flex gap-2">
                                    <button
                                        className="btn btn-success btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addAmount"
                                    >
                                        Add Deposit Balance
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#DebitBalance"
                                    >
                                        Debit Balance
                                    </button>
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#TokenBalc"
                                    >
                                        Token Balance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="mb-2">Balance</h5>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Total Avl balance  :<b>0</b></p>
                                    <p className='mb-1'>Won Balance :<b>0</b></p>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Deposit Balance: <b>0</b></p>
                                </div>
                                <div className="col-12">
                                    <h5 className="mb-2">Transactions</h5>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Total Deposit  :<b>0</b></p>
                                    <p className='mb-1'>Admin Deposit :<b> 0</b></p>
                                    <p className='mb-1'>Referral Bal: <b>0</b></p>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Total Withdrawal: <b>0</b></p>
                                    <p className='mb-1'>Admin Withdrawal: <b>0</b></p>
                                </div>
                                <div className="col-12">
                                    <h5 className="mb-2">Matches</h5>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Total Match Played :<b>0</b></p>
                                    <p className='mb-1'>Total won :<b> 0</b></p>
                                </div>
                                <div className="col-6">
                                    <p className='mb-1'>Total Entry: <b>0</b></p>
                                    <p className='mb-1'>Total Lost: <b>0</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="modal fade"
                id="addAmount"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form action="" onSubmit={handleAddAmount}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Modal title
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <input type="hidden" className='form-control' name="user_id" id="user_id" value={data?.id} />
                                    <div className="col-12 mb-2">
                                        <label htmlFor="amount">Amount</label>
                                        <input type="number" className='form-control' name="amount" id="amount" />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="remark">Remark</label>
                                        <textarea className='form-control' name="remark" id="remark" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
