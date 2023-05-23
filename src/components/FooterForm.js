import React, { useState } from 'react';

function FooterForm({ handleFooterChange }) {
  const [footerBackground, setFooterBackgroundColor] = useState('');
  const [footerTextColor, setFooterTextColor] = useState('');
  const [footerText, setFooterText] = useState('');

  const updateFooter = () => {
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
    <div>
      <label>Background Color</label>
      <input type="text" value={footerBackground} onChange={e => setFooterBackgroundColor(e.target.value)} />

      <label>Footer Text Color</label>
      <input type="text" value={footerTextColor} onChange={e => setFooterTextColor(e.target.value)} />

      <label>Footer Text</label>
      <input type="text" value={footerText} onChange={e => setFooterText(e.target.value)} />

      <button onClick={updateFooter}>Update Footer</button>
    </div>
  );
}

export default FooterForm;
