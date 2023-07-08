import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {

  const billboard = await getBillboard("20cf1e86-c9ae-4d03-8ab9-743e6e4fd787");
  const products = await getProducts({ isFeatured: true });


  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
        
      </div>
    </Container>
  )
}
