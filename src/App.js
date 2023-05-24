import React, { useState } from 'react';
import './App.css';
import './FormBuilder.css';
import FormBuilder from './components/FormBuilder';
import HeaderForm from './components/HeaderForm';
import FooterForm from './components/FooterForm';
import NavButton from './components/NavButton';

function App() {
  const [activeForm, setActiveForm] = useState('Body');
  const [header, setHeader] = useState({});
  const [footer, setFooter] = useState({});

  const [sections, setSections] = useState([{ displayname: "", fields: [""] }]);

  const handleHeaderChange = (header) => {
    setHeader(header);
  };

  const handleFooterChange = (footer) => {
    setFooter(footer);
  };

  const forms = {
    'Header': (
      <>
        <HeaderForm handleHeaderChange={handleHeaderChange} />
        <h2>Header JSON Output</h2>
        <pre>{JSON.stringify(header, null, 2)}</pre>
        <button onClick={() => navigator.clipboard.writeText(JSON.stringify(header, null, 2))}>Copy to Clipboard</button>
      </>
    ),
    'Body': (
      <>
        <FormBuilder sections={sections} setSections={setSections} />
      </>
    ),
    'Footer': (
      <>
        <FooterForm handleFooterChange={handleFooterChange} />
        <h2>Footer JSON Output</h2>
        <pre>{JSON.stringify(footer, null, 2)}</pre>
        <button onClick={() => navigator.clipboard.writeText(JSON.stringify(footer, null, 2))}>Copy to Clipboard</button>
      </>
    )  };

  return (
    <body>
      <div className="App">
        <header class="banner">
          <h1 class="header-title">SharePoint List Form Designer</h1>
          <nav class="horizontal-menu">
        <a href="https://list.challigan.com/" class="menu-item">List Generator</a>
        <a href="https://trigger.challigan.com/" class="menu-item">Trigger Condition Generator</a>
        <a href="https://odata.challigan.com/" class="menu-item">ODATA Query Generator</a>
        <a href="https://form.challigan.com/" class="menu-item">List Form Designer</a>
    </nav>
        </header>
        <nav class="horizontal-menu">
            <NavButton name='Header' activeForm={activeForm} setActiveForm={setActiveForm} />
            <NavButton name='Body' activeForm={activeForm} setActiveForm={setActiveForm} />
            <NavButton name='Footer' activeForm={activeForm} setActiveForm={setActiveForm} />
          </nav><br/>
<br/>
        {forms[activeForm]}
      </div>
<br/><br/>
<br/>
<br/>

      <footer>
        <div class="footer-content">Tools by CHalligan</div>
        <a href="https://www.buymeacoffee.com/challigan87" class="buymeacoffee" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>
      </footer>
    </body>
  );
}

export default App;
