import React, { useState } from 'react';

function HeaderForm({ handleHeaderChange }) {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [iconName, setIconName] = useState('');
  const [iconColor, setIconColor] = useState('#000000');
  const [headerTextColor, setHeaderTextColor] = useState('#000000');
  const [headerText, setHeaderText] = useState('');
  

  const updateHeader = (e) => {
    e.preventDefault();
    handleHeaderChange({
      elmType: "div",
      attributes: { "class": "ms-borderColor-neutralTertiary" },
      style: {
        "width": "99%",
        "border-top-width": "0px",
        "border-bottom-width": "1px",
        "border-left-width": "0px",
        "border-right-width": "0px",
        "border-style": "solid",
        "margin-bottom": "15px",
        "background-color": backgroundColor
      },
      children: [
        {
          elmType: "div",
          style: { "display": "flex", "box-sizing": "border-box", "align-items": "center" },
          children: [
            {
              elmType: "div",
              attributes: {
                "iconName": iconName,
                "class": "ms-fontSize-42 ms-fontWeight-regular ms-fontColor-themePrimary",
                "title": "Details"
              },
              style: {
                "flex": "none",
                "padding": "0px",
                "padding-left": "10px",
                "height": "40px",
                "color": iconColor
              }
            }
          ]
        },
        {
          elmType: "div",
          attributes: { "class": "ms-fontColor-neutralSecondary ms-fontWeight-bold ms-fontSize-24" },
          style: {
            "box-sizing": "border-box",
            "width": "100%",
            "text-align": "left",
            "padding": "21px 12px",
            "overflow": "hidden",
            "color": headerTextColor
          },
          children: [
            {
              elmType: "div",
              txtContent: headerText
            }
          ]
        }
      ]
    });
  }

  return (
    <form onSubmit={updateHeader} className="header-form">
      <div className="form-row">
        <label className="form-label">Background Color</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="color" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} />
        <div style={{ width: '400px', height: '40px', backgroundColor, marginLeft: '10px' }}></div>
      </div>      
      </div>
      <div className="form-row">
        <label className="form-label"><a href="https://uifabricicons.azurewebsites.net/" target="_blank" rel="noreferrer">Icon Name</a></label>
        <input type="text" value={iconName} onChange={e => setIconName(e.target.value)} />
      </div>
      <div className="form-row">
        <label className="form-label">Icon Color</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="color" value={iconColor} onChange={e => setIconColor(e.target.value)} />
        <div style={{ width: '400px', height: '40px',backgroundColor: iconColor, marginLeft: '10px' }}></div>
      </div>
      </div>
      <div className="form-row">
        <label className="form-label">Header Text Color</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="color" value={headerTextColor} onChange={e => setHeaderTextColor(e.target.value)} />
        <div style={{ width: '400px', height: '40px',backgroundColor: headerTextColor, marginLeft: '10px' }}></div>
      </div>
      </div>
      <div className="form-row">
        <label className="form-label">Header Text</label>
        <input type="text" value={headerText} onChange={e => setHeaderText(e.target.value)} />
      </div>
      <button onClick={e => updateHeader(e)}>Update Header</button>
    </form>
  );
}

export default HeaderForm;
