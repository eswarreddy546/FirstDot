import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <div className="mb-3 row justify-content-center">
        <label htmlFor="name" className="col-sm-2 col-form-label">Your Name:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputName" />
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="designation" className="col-sm-2 col-form-label">Designation:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputDesignation" />
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputAddress" />
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="city" className="col-sm-2 col-form-label">City:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputCity" aria-label="City" />
          
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="zip" className="col-sm-2 col-form-label">Zip / Postal Code:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="state" className="col-sm-2 col-form-label">State:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputState" />
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="country" className="col-sm-2 col-form-label">Country:</label>
        <div className="col-sm-2">
          <select className="form-select" aria-label="Country select">
            <option selected>Select The Country</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number with Country & Area Code:</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputPhone" />
        </div>
      </div>

      <div className="mb-3 row justify-content-center">
        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
        <div className="col-sm-2">
          <input type="Email" className="form-control" id="inputEmail" />

          
        </div>
        <form class="row g-3 justify-content-center">
  <div class="col-12 text-center"> 
    <button type="submit Details" class="btn btn-primary">Submit Details</button>
  </div>
</form>

      </div>

     




    </div>
  );
}
