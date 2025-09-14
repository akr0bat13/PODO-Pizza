'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', "Кофе"]

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((cat, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === index && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${cat}`}
          key={index}>
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
