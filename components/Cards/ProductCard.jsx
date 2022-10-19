import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BsTruck } from "react-icons/bs";
import { TbShoppingCartPlus } from "react-icons/tb";

import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addCartItem } = useContext(CartContext);

  const handleBtnAddCart = () => {
    addCartItem(product);
  }

  return (
    <>
      <div className="product relative bg-brand-gray-light rounded-20 overflow-hidden border border-transparent lg:hover:border-brand-primary">
        <div className="relative w-full h-60 lg:h-auto rounded-t-20 overflow-hidden lg:aspect-square">
          <Image
            className="transition-transform duration-300"
            layout="fill"
            objectFit="cover"
            src={`/assets/img/flower${product.img}.jpg`}
          />
        </div>
        <div className="font-poppins p-5">
          <Link href="/">
            <a className="inline-block font-nunito font-bold text-lg leading-6">
              {product.flowerName}
            </a>
          </Link>
          <p className="text-sm text-brand-gray-medium">{product.text}</p>
          <p className="ftext-sm text-brand-primary mt-2.5">{product.delivery}</p>
          <p className="text-2xl font-semibold mt-2.5">${product.price}</p>

          <div className="flex items-center font-nunito space-x-4 lg:space-x-7 mt-5">
            <button
              onClick={handleBtnAddCart}
              type="button"
              className="relative h-11 w-full flex items-center  bg-brand-primary text-white rounded-base overflow-hidden group"
            >
              <span className="h-full w-full flex items-center justify-center absolute -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <TbShoppingCartPlus className="text-2xl" />
              </span>
              <span className="h-full w-full flex items-center justify-center text-sm font-medium group-hover:translate-y-full transition-transform duration-300">
                Agregar al carrito
              </span>
            </button>
            <button 
              // onClick={handleBtn}
              className="h-11 w-11 shrink-0 grid place-content-center bg-white text-brand-primary lg:hover:bg-brand-primary lg:hover:text-white rounded-10 transition-colors duration-200"
            >
              <BsTruck className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      
      {/* <CartModal /> begin =====*/}
      {/* {modalOpen ? <CartModal modalItem={modalItem} setModalOpen={setModalOpen} /> : ""} */}
      {/* <CartModal /> close =====*/}
    </>
  );
};

export default ProductCard;
