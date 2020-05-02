import React from 'react';

// To use "import { Title } from './components/Title" instead of "import WhateverName from './components/Title"
export const Title = ({ children }) => (
  <h1 className="title">{children}</h1>
)