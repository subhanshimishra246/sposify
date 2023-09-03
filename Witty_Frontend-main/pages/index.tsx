import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import { fetchDataFromAPI } from "./../utils/dataFetch";
import Web3 from "web3";
import Web3Model from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connector/wallet";
import { useState } from "react";

const provider_option: any = {
	// See Provider Options Section
	package: WalletConnectProvider,
	options: {
		infuraId: "0x2C14453E75B79F1f7d89cA241102302E1B11828e",
	},
};

const IndexPage = () => {
	const [connect, setConnect]: any = useState(false);
	if (typeof window !== "undefined") {
		var web3model: any = new Web3Model({
			network: "mainnet",
			cacheProvider: true,
			providerOptions: provider_option,
		});
	}

	const { activate, account, deactivate, active, chainId } = useWeb3React();

	const connectMetamask = async () => {
		try {
			await activate(injected);
		} catch (error) {}
	};
	const disconnectMetamask = async () => {
		try {
			await deactivate();
		} catch (error) {}
	};

	return (
		<Layout>
			<PageIntro />
			{!connect && (
				<div
					className="container connect"
					onClick={async () => {
						const provider = await web3model.connect();
						const web3 = new Web3(provider);
						const accounts = await web3.eth.getAccounts();
						console.log(accounts);
						setConnect(true);
					}}
				>
					<button className="btn">Connect to Wallet</button>
				</div>
			)}
			{active && (
				<>
					<span className="account">{account}</span>
					<br />
					<br />
					<span className="chainid">{chainId}</span>
				</>
			)}

			<section className="featured">
				<div className="container">
					<article
						style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
						className="featured-item featured-item-large"
					>
						<div className="featured-item__content">
							<h3>New arrivals are now in!</h3>
							<a href="#" className="btn btn--rounded">
								Show Collection
							</a>
						</div>
					</article>

					<article
						style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
						className="featured-item featured-item-small-first"
					>
						<div className="featured-item__content">
							<h3>Basic t-shirts $29,99</h3>
							<a href="#" className="btn btn--rounded">
								More details
							</a>
						</div>
					</article>

					<article
						style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
						className="featured-item featured-item-small"
					>
						<div className="featured-item__content">
							<h3>Sale this summer</h3>
							<a href="#" className="btn btn--rounded">
								VIEW ALL
							</a>
						</div>
					</article>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<header className="section__intro">
						<h4>Why should you choose us?</h4>
					</header>

					<ul className="shop-data-items">
						<li>
							<i className="icon-shipping"></i>
							<div className="data-item__content">
								<h4>Free Shipping</h4>
								<p>
									All purchases over $199 are eligible for free shipping via
									USPS First Class Mail.
								</p>
							</div>
						</li>

						<li>
							<i className="icon-payment"></i>
							<div className="data-item__content">
								<h4>Easy Payments</h4>
								<p>
									All payments are processed instantly over a secure payment
									protocol.
								</p>
							</div>
						</li>

						<li>
							<i className="icon-cash"></i>
							<div className="data-item__content">
								<h4>Money-Back Guarantee</h4>
								<p>
									If an item arrived damaged or you've changed your mind, you
									can send it back for a full refund.
								</p>
							</div>
						</li>

						<li>
							<i className="icon-materials"></i>
							<div className="data-item__content">
								<h4>Finest Quality</h4>
								<p>
									Designed to last, each of our products has been crafted with
									the finest materials.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<ProductsFeatured />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export async function getStaticProps() {
	const test = await fetchDataFromAPI("/api/testings");
	return {
		props: {
			test,
		},
	};
}

export default IndexPage;
