import './home.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/galleryCards/GalleryCards'
import Footer from '../../components/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}
