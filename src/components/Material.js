import React from 'react';
import styled from 'styled-components';

const MaterialContainer = styled.div`
  margin-bottom: 15px;
  color: #fff;
`;

const MaterialTitle = styled.h4`
  margin: 5px 0;
`;

const MaterialLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Material({ title, pdfPath }) {
  return (
    <MaterialContainer>
      <MaterialTitle>{title}</MaterialTitle>
      <MaterialLink href={pdfPath} target="_blank" rel="noopener noreferrer">Buka PDF</MaterialLink>
    </MaterialContainer>
  );
}

export default Material;