import React from 'react';
import './index.scss';
import InspectorPanel from '../InspectorPanel';
import Viewport from '../Viewport';
import MenuBar from '../MenuBar';
import Timeline from '../Timeline';
import CodeViewer from '../CodeViewer';

const ViewManager = () => (
  <div className="view-manager">
    <MenuBar />

    <div className="view-manager__middle">
      <InspectorPanel />

      <div className="view-manager__middle__left">
        <Viewport />
        <CodeViewer />
      </div>
    </div>

    <Timeline />
  </div>
);

export default ViewManager;
