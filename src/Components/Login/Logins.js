import React from 'react'

export default function Logins() {
  return (
    <div className="container">
    <div className="mb-3 row justify-content-center">
      <label htmlFor="name" className="col-sm-2 col-form-label">Login:</label>
      <div className="col-sm-2">
        <input type="text" className="form-control" id="inputName" />
      </div>
    </div>

    <div className="mb-3 row justify-content-center">
      <label htmlFor="designation" className="col-sm-2 col-form-label">Password:</label>
      <div className="col-sm-2">
        <input type="Password" className="form-control" id="inputDesignation" />
      </div>
    </div>

    <div className="mb-3 row justify-content-center">
      <label htmlFor="address" className="col-sm-2 col-form-label">Confirm Password:</label>
      <div className="col-sm-2">
        <input type="Password" className="form-control" id="inputAddress" />
      </div>
    </div>
    </div>
  )
}
