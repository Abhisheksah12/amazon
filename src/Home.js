import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
  return (
    <div className="home">
          <div className="home__container">
            
            <img 
            className="home__image"
            src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg" alt="" 
            />
            <div className="home__row">
                <Product
                id={1}
                title="The Lean Startup:How constant innovation creates Radically Sucessfull Buisness  Paperback"
                price={29.99}
                image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
                rating={5}
                />
                <Product
                id={2}
                title="Kenwood kmix Stand Mixer for Baking Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                price={239}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81rgIlDm6wL._AC_SX569_.jpg"
                rating={4} 
                />
                
            </div>
            <div className="home__row">
            <Product
            id={3}
            title="samsung Fit-Band Sport Watch"
            price={99.99}
            image="https://image-us.samsung.com/SamsungUS/home/mobile/wearables/galaxy-fit/pdp/sm-r370nzsaxar/009-Gallery-Galaxy-Fit-Black.jpg?$product-details-jpg$"
            rating={3}
            />
            <Product
            id={4}
            title="Amazon Echo (3rd Generation )| Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://mobileimages.lowes.com/productimages/8481d3d8-ced8-4aab-a5e1-d05dce3f9375/12025269.jpg"
            />
            <Product
            id={5}
            title="New Apple Ipad (12.9-inch,wifi,128GB)-Silver(4th-Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/610b7FD+b0L._AC_UF894,1000_QL80_.jpg"
            />
            </div>
            <div className="home__row">
                
            <Product
            id={6}
            title="samsung LC49235617 49 in Curved LED Monitor"
            price={1999.99}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81rus0UFhsL._AC_SL1500_.jpg"
            rating={3}
            />
            </div>
        </div>
    </div>
  )
}

export default Home;