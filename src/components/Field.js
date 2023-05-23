import React, { useState } from 'react';

function Field({ field, index, handleFieldChange, handleDelete }) {
  const [fieldName, setFieldName] = useState(field);

  const handleChange = (event) => {
    setFieldName(event.target.value);
    handleFieldChange(index, event.target.value);
  };

  return (
    <div className="field">
      <label htmlFor={`field-${index}`}>Column Name:</label>
      <input id={`field-${index}`} value={fieldName} onChange={handleChange} />
      <button onClick={() => handleDelete(index)}>Delete Field</button>
    </div>
  );
}

export default Field;
