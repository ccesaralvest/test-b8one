import styled from 'styled-components';

//components
import Shelf from "./components/Shelf/Shelf";

//assets
import imageProduct from "./assets/productImage.png";
import wishlistImageCover from "./assets/wishlist.png";
import wishlistImageHover from "./assets/wishlistHover.png";
import wishlistImage from "./assets/wishlistActive.png";
import purchasedIco from "./assets/purchasedIco.png";

//styles
const MainPage = styled.main `
  background-color: #E9EBEE;
  width: 100%;
  display: flex;
  padding: 60px;
  justify-content: space-evenly;
`;

function App() {
  
  //data
  const products = [
    {
      id: 123,
      image: imageProduct,
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      oldPrice: "R$ 2.599,00",
      price: "R$ 2.599,00",
      installments: "10x de R$ 259,90",
      wishlist: false,
      wishlistImageCover: wishlistImageCover,
      wishlistImageHover: wishlistImageHover,
      wishlistImage: wishlistImage, 
      purchased: false,
      purchasedIco: purchasedIco
    }
  ]

  return (
    <>
      <MainPage>
        <Shelf products={products}/>
      </MainPage>
    </>
  );
}

export default App;
