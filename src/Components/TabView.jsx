import React, { useState } from 'react';

const TabView = ({ story }) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return story.Description || 'No Description';
      case 'content':
        return story.Content || 'No Content';
      case 'summary':
        return story.Summary || 'No Summary';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="flex space-x-4 border-b mb-4">
        <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'font-bold border-b-2 border-blue-600' : ''}>Description</button>
        <button onClick={() => setActiveTab('content')} className={activeTab === 'content' ? 'font-bold border-b-2 border-blue-600' : ''}>Content</button>
        <button onClick={() => setActiveTab('summary')} className={activeTab === 'summary' ? 'font-bold border-b-2 border-blue-600' : ''}>Summary</button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default TabView;
