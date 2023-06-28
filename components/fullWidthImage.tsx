import { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Governance from "../public/img/governance.png";

export default function FullWidthImage() {
    const [playVideo, setPlayVideo] = useState(false);
    return (
        <Container>
            <div className="w-full max-w-4xl mx-auto mb-20 overflow-hidden rounded-2xl ">
                <Image
                    src={Governance}
                    // width="521"
                    // height="482"
                    alt="Benefits"
                    layout="intrinsic"
                    placeholder="blur"
                />
            </div>
        </Container>
    );
}
