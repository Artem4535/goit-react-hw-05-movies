import Notiflix from 'notiflix';
import { Input } from './Form.styled';
import { useState } from 'react';
import { SearchBtn } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handlerChange = e => setQuery(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      Notiflix.Notify.failure('Please enter a valid value');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label>
          <Input onChange={handlerChange} value={query} type="text"></Input>
        </label>
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
    </>
  );
};

export default Form;
