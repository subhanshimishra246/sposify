import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Witty Hackathon</title>
				<meta name="description" content="Witty Hackathon" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
