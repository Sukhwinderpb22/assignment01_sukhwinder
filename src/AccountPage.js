import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AccountPage = ({ userDetails, onUpdateUserDetails }) => {
  const [user, setUser] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUserDetails(user);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter your name" value={user.name} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" value={user.email} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" placeholder="Enter your address" value={user.address} onChange={handleChange} />
      </FormGroup>
      <Button type="submit">Update Details</Button>
    </Form>
  );
};

export default AccountPage;