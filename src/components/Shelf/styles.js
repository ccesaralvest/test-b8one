import styled from 'styled-components'

export const BuyButton = styled.button `
    color: white;
    background-color: #40B25C;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    width: 241px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 16px;
    border: none;
    &:hover {
        background-color: #1C6C3E;
        cursor: pointer;
    }
`;
export const PurchasedButton = styled.button `
    color: black;
    background-color: #A3F9B9;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    width: 241px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border: none;
    img {
        padding-right: 10px;
    }
`;
export const ProductCard = styled.section `
    width: 100%;
    max-width: 304px;
    height: 541px;
    background-color: white;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    padding-top: 16px;
    position: relative;
`;
export const ProductImage = styled.img `
    width: 100%;
    max-width: 240px;
    margin: 0 auto;
    display: block;
`;
export const ProductName = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 24px;
`;
export const ProductPrice = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #DA4B4F;
    margin: 0;
    font-weight: 600;
`;
export const ProductOldPrice = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 5px;
    color: #B5B5B6;
    text-decoration: line-through;
`;
export const ProductInstallments = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 20px;
    color: grey;
    span {
        font-weight: 600;
        color: black;
    }
`;
export const ProductInfos = styled.section `
    width: 240px;
    margin: 0 auto;
    padding-top: 32px;
`;
export const WishlistContainer = styled.section `
    position: absolute;
    right: 0;
    right: 36px;
`;