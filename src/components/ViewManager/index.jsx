import React from 'react';
import './index.scss';
import InspectorPanel from '../InspectorPanel';
import Viewport from '../Viewport';
import MenuBar from '../MenuBar';
import Timeline from '../Timeline';
import CodeViewer from '../CodeViewer';

const ViewManager = () => (
  <div className="view-manager-container">
    <MenuBar />

    <div className="middle-content-container">
      <InspectorPanel />

      <div className="viewers-container">
        <Viewport />
        <CodeViewer />
      </div>
    </div>

    <Timeline />
  </div>
);

export default ViewManager;
