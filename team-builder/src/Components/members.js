import React from "react";

const Members = props => {
  console.log(props);
  return (
    <div className="Members-list">
      {props.data.map(member => {
        return (
          <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Members;