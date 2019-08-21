import React from 'react';
import {useState} from 'react'

const Form = props => {
    const [members, setMembers] = useState()

    setMembers({ name: "", email: "", role: "" });

    const changeHandler = event => {
        setMembers({ ...members, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
            event.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Member's Name"
            value={members.name}
            onChange={changeHandler}
          />
          <label htmlFor="email">Email</label>
          <textarea
            name="email"
            placeholder="Email"
            value={members.email}
            onChange={changeHandler}
          />
          <label htmlFor="role">Role</label>
          <textarea
            name="role"
            placeholder="Role"
            value={members.role}
            onChange={changeHandler}
          />
          <button type="submit">Add note</button>
        </form>
      );
    };


export default Form;