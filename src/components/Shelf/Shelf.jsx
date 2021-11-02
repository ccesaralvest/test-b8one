import React, { useState } from 'react';
import HoverImage from "react-hover-image";
// styles
import {
    BuyButton,
    PurchasedButton,
    ProductCard,
    ProductImage,
    ProductName,
    ProductPrice,
    ProductOldPrice,
    ProductInstallments,
    ProductInfos,
    WishlistContainer
} from "./styles";


function Shelf({ products }){
    const [ productPurchased, setProductPurchased ] = useState(false);
    const [ wishlist, setWishlist ] = useState(false);
   
    function buyProduct(){
        setProductPurchased(true);
    };

    function productWishlist(){
        setWishlist(true);
    };

    return (
        <>
        {
            products.map((product) => (
                <ProductCard key={product.id} className="product">
                    <WishlistContainer>
                        {  
                            wishlist ?
                            <img src={product.wishlistImage} alt="wishlistImage"/>
                            :                          
                            <HoverImage 
                                style={{cursor:"pointer"}}
                                alt="wishlistImageCover" 
                                src={product.wishlistImageCover} 
                                onClick={productWishlist} 
                                hoverSrc={product.wishlistImageHover} 
                            />
                          
                        }
                    </WishlistContainer>

                    <ProductImage key={product.id} src={product.image} alt="productImage"></ProductImage>

                    <ProductInfos>
                        <ProductName>{product.name}</ProductName>
                        <ProductOldPrice>{product.oldPrice}</ProductOldPrice>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductInstallments> em até <span>{product.installments}</span> sem juros</ProductInstallments>
                    </ProductInfos>

                    {
                        productPurchased ?
                        <PurchasedButton>
                            <img key={product.id} src={product.purchasedIco} alt="purchasedButton"/>    
                            ADICIONADO
                        </PurchasedButton>
                        :
                        <BuyButton onClick={buyProduct}>ADICIONAR</BuyButton>
                    }
                </ProductCard>
            ))  
        }
        </>
    )
}

export default Shelf; 