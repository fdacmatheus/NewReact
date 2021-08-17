import React from 'react';
import Button from './Button';
import Input from './Input';

const form = () => {
  return (
    <form>
      <p>
        <label htmlFor="Nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="E-mail">E-mail</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default form;
