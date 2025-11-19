import React from "react";

const Profile = () => {
  return (
    <div className="profile-card">
      <h2>Profile</h2>
      <p>Simple read-only profile card.</p>
      <dl>
        <div>
          <dt>Name</dt>
          <dd>Jeshwin William James</dd>
        </div>
        <div>
          <dt>Program</dt>
          <dd>M.S. in Computer Science</dd>
        </div>
        <div>
          <dt>University</dt>
          <dd>Oklahoma City University</dd>
        </div>
      </dl>
    </div>
  );
};

export default Profile;
