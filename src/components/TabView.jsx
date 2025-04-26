import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/tabs/tabsSlice.js";
import TabOne from "./TabOne.jsx";
import TabTwo from "./TabTwo.jsx";
import TabThree from "./TabThree.jsx";
import "./TabView.scss";

const TabView = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);

  const handleTabChange = (_event, newValue) => {
    dispatch(setActiveTab(newValue));
  };

  return (
    <div className="tab-view">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Box>
      <div className="tab-content-wrapper">
        {activeTab === 0 && <TabOne />}
        {activeTab === 1 && <TabTwo />}
        {activeTab === 2 && <TabThree />}
      </div>
    </div>
  );
};

export default TabView;
