import React, { useState } from 'react';

function HeaderForm({ handleHeaderChange }) {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [iconName, setIconName] = useState('');
  const [iconColor, setIconColor] = useState('');
  const [headerTextColor, setHeaderTextColor] = useState('');
  const [headerText, setHeaderText] = useState('');

  const updateHeader = () => {
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
    <div>
      <label>Background Color</label>
      <input type="text" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} />

      <label><a href="https://uifabricicons.azurewebsites.net/" target="_blank" rel="noreferrer">Icon Name</a></label>
      <input type="text" value={iconName} onChange={e => setIconName(e.target.value)} />

      <label>Icon Color</label>
      <input type="text" value={iconColor} onChange={e => setIconColor(e.target.value)} />

      <label>Header Text Color</label>
      <input type="text" value={headerTextColor} onChange={e => setHeaderTextColor(e.target.value)} />

      <label>Header Text</label>
      <input type="text" value={headerText} onChange={e => setHeaderText(e.target.value)} />

      <button onClick={updateHeader}>Update Header</button>
    </div>
  );
}

export default HeaderForm;
