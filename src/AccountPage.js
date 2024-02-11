import React, { useState } from 'react';
import './AccountPage.css';

function AccountPage({ userDetails, handleUpdateUserDetails }) {
  const [user, setUser] = useState(userDetails);
  const [updateMessage, setUpdateMessage] = useState('');

  function changeTheDetails(detailChange) {
    const { name, value } = detailChange.target;
    setUser((preState) => ({ ...preState, [name]: value }));
  }

  function submitTheDetails(detailSubmit) {
    detailSubmit.preventDefault();
    handleUpdateUserDetails(user);
    const message = `Details Updated Successfully\n
    First Name: ${user.firstName}\n
    Last Name: ${user.lastName}\n
    Email: ${user.email}\n
    Mobile Number: ${user.mobileNumber}\n
    Shipping Address: ${user.address}`;
    setUpdateMessage(message);
  }

  return (
    <div>
      <form onSubmit={submitTheDetails}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" placeholder="Enter your First Name" value={user.firstName} onChange={changeTheDetails} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" placeholder="Enter your Last Name" value={user.lastName} onChange={changeTheDetails} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" value={user.email} onChange={changeTheDetails} />

        <label htmlFor="mobileNumber">Mobile Number</label>
        <input type="text" name="mobileNumber" id="mobileNumber" placeholder="Enter your Mobile Number" value={user.mobileNumber} onChange={changeTheDetails} />

        <label htmlFor="address">Shippping Address</label>
        <input type="text" name="address" id="address" placeholder="Enter your address" value={user.address} onChange={changeTheDetails} />

        <button type="submit">Update Details</button>
      </form>

      {updateMessage && <p className="updatealertmessage">{updateMessage}</p>}
    </div>
  );
};

export default AccountPage;
