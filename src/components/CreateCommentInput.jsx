import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function CreateCommentInput({handleComment}) {
  const [content, setContent] = useInput('');

  return (
    <div className="comment-input">
      <h2>Beri Komentar</h2>
      <textarea type="text" placeholder="Add a comment" onChange={setContent}/>
      <button onClick={() => handleComment({content})}>Kirim Komentar</button>
    </div>
  );
}
CreateCommentInput.propTypes = {
  handleComment: PropTypes.func,
};


export default CreateCommentInput;
