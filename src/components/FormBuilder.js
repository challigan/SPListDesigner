import React from 'react';
import Section from './Section';

function FormBuilder({ sections, handleSectionsChange }) {

  const handleSectionChange = (index, newSection) => {
    const newSections = [...sections];
    newSections[index] = newSection;
    handleSectionsChange(newSections);
  };

  const deleteSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    handleSectionsChange(newSections);
  };

  const addSection = () => {
    handleSectionsChange([...sections, { displayname: "", fields: [""] }]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify({ sections }, null, 2));
  };

  return (
    <div className="App">
      {sections.map((section, i) => (
        <Section key={i} section={section} index={i} handleSectionChange={handleSectionChange} handleDelete={deleteSection} />
      ))}
      <button onClick={addSection}>Add Section</button>
      <h2>Body JSON Output</h2>
      <pre>{JSON.stringify({ sections }, null, 2)}</pre>
      <button onClick={copyToClipboard}>Copy to clipboard</button>
    </div>
  );
}

export default FormBuilder;
