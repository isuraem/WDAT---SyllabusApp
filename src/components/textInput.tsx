// pages/components/TextInput.tsx

import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  type: any;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, value, type,onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
