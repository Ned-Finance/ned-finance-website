import { CheckCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default () => {

    const contentStyle = { background: 'rgb(0,0,0,0)', color: '#fff', borderRadius: '20px', padding: 0, boxShadow: 'none' }
    const contentArrowStyle = { borderRight: 'transparent', border: 'none' }
    const iconStyle = { background: '#374151', color: '#fff', border: '5px solid #9ca3af', boxShadow: 'none', width: "30px", height: "30px", left: "5px" }

    return (
        <>
            <Navbar />
            <div className='container p-8 mx-auto xl:px-0 flex flex-wrap flex-row'>
                <div className="w-full mb-24">
                    <h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-6xl lg:leading-tight xl:text-8xl xl:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-ned-green to-ned-blue font-calSans w-min'>Roadmap</h1>
                    <p className="text-white">We expect to deliver new value to our users every month, here you can find all the features we implement and their status. Every day closer to our next goal.</p>
                </div>
                <VerticalTimeline lineColor={'#27272a'} layout={"1-column-left"}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.0.0"
                        iconStyle={{ ...iconStyle, background: "#00EFD1", borderColor: '#00A38D' }}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">Apr 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl">Solana: Wallet Basic features</h4>
                        <ul className='list-disc text-neutral-400 mt-4 ml-4'>
                            <li>Create/import wallet</li>
                            <li>Load all user tokens</li>
                            <li>Get movements history from each token</li>
                            <li>Get market information for each token</li>
                            <li>Send/Receive tokens on same network</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.1.0"
                        iconStyle={{ ...iconStyle, background: "#00EFD1", borderColor: '#00A38D' }}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">May 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl">Solana: Integrations</h4>
                        <ul className='list-disc text-neutral-400 mt-4 ml-4'>
                            <li>List user NFTs collections</li>
                            <li>Solana Pay integration</li>
                            <li>Swap tokens with Jupiter integration</li>
                            <li>Funds with Symmetry integration</li>
                            <li>Magic Eden integration</li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.2.0"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">June 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl">Sui: Wallet Basic features</h4>
                        <ul className='list-disc text-neutral-400 mt-4 ml-4'>
                            <li>Create/import wallet</li>
                            <li>Load all user tokens</li>
                            <li>Get movements history from each token</li>
                            <li>Get market information for each token</li>
                            <li>Send/Receive tokens on same network</li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.3.0"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">Jul 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl"><span className="text-ned-green">Launch:</span> Beta release</h4>
                        <p className='text-neutral-400 mt-4 ml-4'>
                            First published version of the app
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.4.0"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">Jul 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl">Aptos: Wallet Basic features</h4>
                        <ul className='list-disc text-neutral-400 mt-4 ml-4'>
                            <li>Create/import wallet</li>
                            <li>Load all user tokens</li>
                            <li>Get movements history from each token</li>
                            <li>Get market information for each token</li>
                            <li>Send/Receive tokens on same network</li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.5.0"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">Ago 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl"><span className="text-ned-green">Launch:</span> NFT Collection Membership</h4>
                        <p className='text-neutral-400 mt-4 ml-4'>
                            Our NFT membership collection will launch
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        date="v1.6.0"
                        iconStyle={iconStyle}
                    >
                        <h3 className="vertical-timeline-element-title text-neutral-500">Ago 2023</h3>
                        <h4 className="vertical-timeline-element-subtitle text-3xl">Sui: Integrations</h4>
                        <ul className='list-disc text-neutral-400 mt-4 ml-4'>
                            <li>Create/import wallet</li>
                            <li>Load all user tokens</li>
                            <li>Get movements history from each token</li>
                            <li>Get market information for each token</li>
                            <li>Send/Receive tokens on same network</li>
                        </ul>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
            <Footer />
        </>
    )

}