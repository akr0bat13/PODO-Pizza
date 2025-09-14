'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from '@/shared/components/shared/checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {


  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox value='1' text='Новинки' />
        <FilterCheckbox value='2' text='Сборка' />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
        />
      </div>

      <CheckboxFiltersGroup
        title='Ингредиенты'
        className='mt-5'
        limit={4}
        defaultItems={[
          {text: 'Сырный соус', value: '1'},
          {text: 'Моцарелла', value: '2'},
          {text: 'Чеснок', value: '3'},
          {text: 'Соленые огурцы', value: '4'},
          {text: 'Просто огурцы', value: '5'},
          {text: 'Не просто огурцы', value: '6'},
        ]}
        items={[
          {text: 'Сырный соус', value: '1'},
          {text: 'Моцарелла', value: '2'},
          {text: 'Чеснок', value: '3'},
          {text: 'Соленые огурцы', value: '4'},
          {text: 'Просто огурцы', value: '5'},
          {text: 'Не просто огурцы', value: '6'},
        ]}
      />
    </div>
  );
};
