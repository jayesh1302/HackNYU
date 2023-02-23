import React, { useState } from 'react';
import './Photo.css';

function Caption({ text, previewLength }) {
    const previewText = text.slice(0, previewLength);
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={`caption ${collapsed ? 'collapsed' : ''}`}>
              <p style={{textAlign: 'left'}}>{collapsed ? previewText : text}</p>
              {text.length > 25 && (           
                 <button className="collapse-btn" onClick={toggleCollapse}>
                {collapsed ? 'more' : ''}
            </button>
        )}
        </div>
    );
}

export default Caption;
