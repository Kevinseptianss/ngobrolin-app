import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function CreateThreadInput({threadd}) {
  const [title, useTitle] = useInput('');
  const [category, useCategory] = useInput('');
  const [body, useBody] = useInput('');
  return (
    <div className="thread-input">
      <h2>Buat Diskusi Baru</h2>
      <input placeholder="Judul" onChange={useTitle}></input>
      <input placeholder="Kategori" onChange={useCategory}></input>
      <textarea onChange={useBody}></textarea>
      <button onClick={() => threadd({title, category, body})}>Post Thread</button>
    </div>
  );
}

CreateThreadInput.propTypes = {
  threadd: PropTypes.func,
};

export default CreateThreadInput;
