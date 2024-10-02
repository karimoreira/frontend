import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from '@/core'
 
export default function Inicio() {

  return (
    <div className="flex gap-5 flex-wrap">
      <ProdutoItem produto={produtos[0]} />
      <ProdutoItem produto={produtos[8]} />
      <ProdutoItem produto={produtos[15]} />
      <ProdutoItem produto={produtos[22]} />
    </div>
  );
}
