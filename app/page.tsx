import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/shared/components/shared";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title text='Все пиццы' size="lg" className="font-extrabold"/>
    </Container>
    <TopBar />
    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">
        <div className="w-[250px]">
          <Suspense>
            <Filters />
          </Suspense>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList
            items={[
              {
                id: 1,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 2,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 3,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 4,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 5,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
            ]}
            title="Пиццы"
            categoryId={1} />
            <ProductsGroupList
            items={[
              {
                id: 1,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 2,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 3,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 4,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
              {
                id: 5,
                name: 'Пицца 1',
                imageUrl: 'Image',
                price: 550,
                items: [{price: 500}]
              },
            ]}
            title="Комбо"
            categoryId={2} />
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}
