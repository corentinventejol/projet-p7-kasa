import './accomodation.scss';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AccomodationInfo from '../../components/accomodation/accomodationInfo';
import Error from "../notFound/NotFound";
import {	useParams  } from "react-router-dom";
import datas from "../../data/data";

export default function Accomodation() {
	let { id } = useParams();
	let dataCurrentAccomodation = datas.find((data) => data.id === id);
	if (!dataCurrentAccomodation) {
		return <Error/>;
	}
	return (
		<>
			<Header/>
			<AccomodationInfo accomodation={dataCurrentAccomodation} />
			<Footer/>
		</>
	)
}
