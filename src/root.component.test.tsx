/* eslint-disable node/no-unpublished-import */
import React from 'react';
import {cleanup, render, screen, within} from '@testing-library/react';
import Root from './root.component';

describe('Map Modal Tests', () => {
  // To render the map modal before each test
  beforeEach(() => {
    render(<Root />);
  });

  // To unmounts React trees that were mounted with render after each test
  afterEach(() => {
    cleanup;
  });

  it('TEST 1 - Check the presence of the closing cross', () => {
    const {getByText} = within(screen.getByTestId('closingCross'));
    expect(getByText('×')).toBeTruthy();
  });

  it('TEST 2 - Check the presence of the correct title in the map modal', () => {
    const txt =
      'Today I will graduate in Software Engineering at the University of Genoa which is located here, in Via Dodecaneso 35';
    const {getByText} = within(screen.getByTestId('mapModalTitleDiv'));
    expect(getByText(txt)).toBeTruthy();
  });

  it('TEST 3 - Check the presence of the images in the map modal', () => {
    expect(screen.getByTestId('softwareEngineerImg')).toBeTruthy();
    expect(screen.getByTestId('graduationImg')).toBeTruthy();
  });
});
