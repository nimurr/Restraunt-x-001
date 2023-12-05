import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Carousel from "@/components/Home/Carousel";
import Offers from "@/components/Offers";
import Products from "@/components/Products";
import Review from "@/components/Review";

export default function Home() {
  return (
    <main className="">
      
      <Carousel></Carousel>
      <Category></Category>
      <Products></Products>
      <Offers></Offers>
      <Gallery></Gallery>
      <Review></Review>
      <Contact></Contact>

    </main>
  )
}
