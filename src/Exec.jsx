import './Exec.css'
import Heading from './components/Heading'
import Nav from './components/Nav'
import Card from './components/Card'
import Footer from './components/Footer'
import Presidents from './components/ExecSections/Presidents'
import PhotoAndVideo from './components/ExecSections/PhotoAndVideo'
import SocialMedia from './components/ExecSections/SocialMedia'
import Graphics from './components/ExecSections/Graphics'
import OutreachAndEvents from './components/ExecSections/OutreachAndEvents'
import Webmasters from './components/ExecSections/Webmasters'
import Photographers from './components/ExecSections/Photographers'
import { useState } from "react"

function App() {
	
  return (
    <main>
      <Heading/>
			
			<Nav title="Presidents" navImage="cameraback.jpg"/>
			<Presidents />

			<Nav title="Photo and Video" navImage="cameraback2.jpg"/>
			<PhotoAndVideo />

			<Nav title="Social Media" navImage="socialback.jpg"/>
			<SocialMedia />

			<Nav title="Graphics" navImage="graphicback.jpg"/>
			<Graphics />

			<Nav title="Outreach and Events" navImage="eventback.jpg"/>
			<OutreachAndEvents />

			<Nav title="Webmasters" navImage="webback.jpg"/>
			<Webmasters />

			<Nav title="Photographers" navImage="cameraback3.jpg"/>
			<Photographers />

			<Footer/>
    </main>
  );
}

export default App