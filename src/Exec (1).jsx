import './Exec.css'
import Heading from './components/Heading'
import Nav from './components/Nav'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Heading/>
			
			<Nav title="Presidents" navImage="cameraback.jpg"/>
			<section class="cards">
				<Card name="Emaan" image="StockPhoto.png" role="Co-President"/>
				<Card name="Raida" image="StockPhoto.png" role="Co-President"/>
			</section>

			<Nav title="Photo and Video" navImage="cameraback2.jpg"/>
			<section class="cards">
				<Card name="Lily" image="StockPhoto.png" role="Head of Photo and Video"/>
				<Card name="Ethan" image="StockPhoto.png" role="Head of Photo and Video"/>
			</section>

			<Nav title="Social Media" navImage="socialback.jpg"/>
			<section class="cards">
				<Card name="Jenny" image="StockPhoto.png" role="Director of Social Media"/>
				<Card name="Moksh" image="StockPhoto.png" role="Director of Social Media"/>
				<Card name="Nidaa" image="StockPhoto.png" role="Director of Social Media"/>			
			</section>

			<Nav title="Graphics" navImage="graphicback.jpg"/>
			<section class="cards">
				<Card name="Andrew" image="StockPhoto.png" role="Director of Graphics"/>
				<Card name="Hannah" image="StockPhoto.png" role="Director of Graphics"/>
			</section>

			<Nav title="Outreach and Events" navImage="eventback.jpg"/>
			<section class="cards">
				<Card name="Rimmy" image="StockPhoto.png" role="Director of Outreach and Events"/>
			</section>

			<Nav title="Webmasters" navImage="webback.jpg"/>
			<section class="cards">
				<Card name="Stephen" image="StockPhoto.png" role="Webmaster"/>
				<Card name="Harmit" image="StockPhoto.png" role="Webmaster"/>
			</section>

			<Nav title="Photographers" navImage="cameraback3.jpg"/>
			<section class="cards">
				<Card name="Darsh" image="StockPhoto.png" role="Photographer"/>
				<Card name="Flora" image="StockPhoto.png" role="Photographer"/>
				<Card name="Louise" image="StockPhoto.png" role="Photographer"/>
				<Card name="Mila" image="StockPhoto.png" role="Photographer"/>
			</section>

			<Footer/>
    </main>
  );
}
