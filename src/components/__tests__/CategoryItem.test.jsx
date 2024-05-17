import { screen } from '@testing-library/react';
import { renderWithRouter } from './../../utils/testing';

import { CategoryItem } from '../CategoryItem';

describe('CategoryItem', () => {
  it('renders correctly', () => {
    renderWithRouter(
      <CategoryItem
        strCategory="Beef"
        strCategoryThumb="https://www.themealdb.com/images/category/beef.png"
        strCategoryDescription="Beef is the culinary name for meat from cattle, particulary skeletal muscle."
      />,
    );

    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
