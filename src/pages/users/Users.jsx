import React, { useEffect, useState } from 'react'
import { userList, userStatusBlockToggle } from '../apis/UsersApi';
import { Link } from 'react-router-dom';

export default function Users() {
  const [loadingShow, setLoadingShow] = useState(false);
  const [data, setData] = useState([]);

  const userData = async () => {
    setLoadingShow(true);
    const success = await userList();
    if (success === false) {
      setLoadingShow(false);
    }
    if (success) {
      console.log(success);
      setData(success)
    }
  }
  const handleBlockToggle = async (id) => {
    setLoadingShow(true);
    const success = await userStatusBlockToggle(id);
    if (success === false) {
      setLoadingShow(false);
    }
    if (success) {
      userData();
    }
  }

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className="row column_title">
        <div className="col-md-12 mb-3">
          <div className="page_title">
            <h2>Users</h2>
          </div>
        </div>

        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table class="table table-bordered table-striped table-hover">
                  <thead class="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Mobile</th>
                      <th>Referred By</th>
                      <th>Deposit Balance</th>
                      <th>Won Balance</th>
                      <th>Blocked</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.map((item, i) => (
                      <tr>
                        <td>{i + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.mobile}</td>
                        <td>{item.referred_by}</td>
                        <td>{item.deposit_bal}</td>
                        <td>{item.won_bal}</td>
                        <td>
                            <label className="switch">
                              <input type="checkbox" checked={item.is_blocked} onChange={() => handleBlockToggle(item.id)} />
                              <span className="slider" />
                            </label>
                        </td>
                        <td>
                          <Link to="/user/profile" state={{ id: item.id }} className="btn btn-primary">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
