import React, { useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setActiveTab } from "../features/tabs/tabsSlice.js";

const TabTwo = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.tabs);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const handleNavigate = () => {
    dispatch(setActiveTab(2));
  };

  return (
    <div className="tab-content">
      <Button variant="contained" color="primary" onClick={handleNavigate}>
        Navigate to Tab 3
      </Button>

      <div className="users-container">
        <h2>Users Data</h2>
        {loading && <CircularProgress />}
        {error && <p className="error-message">Error: {error}</p>}
        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <div className="user-info">
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
