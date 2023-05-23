import React, { useState } from 'react';
import Section from './Section';

function FormBuilder() {
  const [sections, setSections] = useState([{ displayname: "", fields: [""] }]);

  const handleSectionChange = (index, newSection) => {
    const newSections = [...sections];
    newSections[index] = newSection;
    setSections(newSections);
  };

  const deleteSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { displayname: "", fields: [""] }]);
  };



  return (
    <div className="App">
      {sections.map((section, i) => (
        <Section key={i} section={section} index={i} handleSectionChange={handleSectionChange} handleDelete={deleteSection} />
      ))}
      <button onClick={addSection}>Add Section</button>
      <h2>Body JSON Output</h2>

      <pre>{JSON.stringify({ sections }, null, 2)}</pre>
      
    </div>
  );
}

export default FormBuilder;
