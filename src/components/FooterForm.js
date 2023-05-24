import React, { useState } from 'react';

function FooterForm({ handleFooterChange }) {
  const [footerBackground, setFooterBackgroundColor] = useState('#000000');
  const [footerTextColor, setFooterTextColor] = useState('#000000');
  const [footerText, setFooterText] = useState('');
  

  const updateFooter = (e) => {
    e.preventDefault();
    handleFooterChange({
      "elmType": "div",
      "style": {
          "width": "100%",
          "text-align": "left",
          "overflow": "hidden",
          "border-top-width": "1px"
      },
      "children": [
          {
              "elmType": "div",
              "style": {
                  "height": "15px",
                  "width": "100%",
                  "color": footerTextColor,
                  "font-size": "13px",
                  "border-top": "5px solid #eee",
                  "background-color": footerBackground,
                  "padding": "10px"
              },
              "children": [
                  {
                      "elmType": "a",
                      "txtContent": footerText
                  }
              ]
          }
      ]
  });
  }

  return (
    <form onSubmit={updateFooter} className="footer-form">
      <div className="form-row">
        <label className="form-label">Background Color</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="color" value={footerBackground} onChange={e => setFooterBackgroundColor(e.target.value)} />
        <div style={{ width: '400px', height: '40px',backgroundColor: footerBackground, marginLeft: '10px' }}></div>
      </div>
      </div>
      <div className="form-row">
        <label className="form-label">Footer Text Color</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="color" value={footerTextColor} onChange={e => setFooterTextColor(e.target.value)} />
        <div style={{ width: '400px', height: '40px',backgroundColor: footerTextColor, marginLeft: '10px' }}></div>
      </div>
      </div>
      <div className="form-row">
        <label className="form-label">Footer Text</label>
        <input type="text" value={footerText} onChange={e => setFooterText(e.target.value)} />
      </div>
      <button onClick={e => updateFooter(e)}>Update Footer</button>
    </form>
  );
}

export default FooterForm;
