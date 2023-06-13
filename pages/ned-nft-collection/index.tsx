import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import benefitOneImg from "../../public/img/benefit-one.png";
import { ArrowTrendingUpIcon, ChartBarSquareIcon, WalletIcon } from '@heroicons/react/24/outline';
import Benefits from '../../components/benefits';
import Container from "../../components/container";
import Link from 'next/link';

export default () => {

    const benefitOne = {
        title: "One collection to rule all chains",
        desc: () => <div>
            <p>Why should I buy the collection? The answer is simple, all of our collectors will participate in exclusive protocol giveaways that comes from the fees.</p>
            <br></br>
            <p className="text-ned-green">Raffles with discounts, access exclusive airdrops, whitelist to new amazing projects and more </p>
        </div>,
        image: benefitOneImg,
        bullets: [],
    };

    return (
        <>
            <Navbar />
            <div className='container p-8 mx-auto xl:px-0 flex flex-wrap flex-row'>
                <div className="w-full mb-24">
                    <h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:text-8xl xl:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ned-green to-ned-blue font-calSans w-min'>NFT Collection</h1>
                    <p className="text-white">A new level of interaction with DeFi wallets, what we call <span className="text-ned-green">NFT own participation</span> or <span className="text-ned-green">NFTop</span></p>
                </div>

                <Benefits data={benefitOne} />
                <Benefits imgPos={'right'} data={benefitOne} />

                <Container>
                    <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-gray-900 bg-ned-green px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
                        <div className="flex-grow text-center lg:text-left">
                            <h2 className="text-2xl font-medium lg:text-3xl">
                                Want to learn more about our collection?
                            </h2>
                            <p className="mt-2 font-medium text-gray-900 text-opacity-90 lg:text-xl">
                                Read our NFT own participation section
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full text-center lg:w-auto">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener"
                                className="inline-block py-3 mx-auto text-lg font-medium text-center text-ned-green bg-gray-900 rounded-md px-7 lg:px-10 lg:py-5 ">
                                Ned Docs
                            </a>
                        </div>
                    </div>
                </Container>

            </div>
            <Footer />
        </>
    )

}