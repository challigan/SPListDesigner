import React, { useState } from 'react';
import Field from './Field';

function Section({ section, index, handleSectionChange, handleDelete }) {
  const [sectionName, setSectionName] = useState(section.displayname);
  const [fields, setFields] = useState(section.fields);

  const handleFieldNameChange = (fieldIndex, newValue) => {
    const newFields = [...fields];
    newFields[fieldIndex] = newValue;
    setFields(newFields);
    handleSectionChange(index, { displayname: sectionName, fields: newFields });
  };

  const deleteField = (fieldIndex) => {
    const newFields = [...fields];
    newFields.splice(fieldIndex, 1);
    setFields(newFields);
    handleSectionChange(index, { displayname: sectionName, fields: newFields });
  };

  const addField = () => {
    setFields([...fields, ""]);
    handleSectionChange(index, { displayname: sectionName, fields: [...fields, ""] });
  };

  const handleSectionNameChange = (event) => {
    setSectionName(event.target.value);
    handleSectionChange(index, { displayname: event.target.value, fields });
  };

  return (
    <div className="section">
      <div className="section-header">
        <label htmlFor={`section-${index}`}>Section Name:</label>
        <input id={`section-${index}`} value={sectionName} onChange={handleSectionNameChange} />
        <button onClick={() => handleDelete(index)}>Delete Section</button>
      </div>
      <div>
        {fields.map((field, i) => (
          <Field key={i} field={field} index={i} handleFieldChange={handleFieldNameChange} handleDelete={deleteField} />
        ))}
        <button onClick={addField}>Add Field</button>
      </div>
    </div>
  );
}

export default Section;
