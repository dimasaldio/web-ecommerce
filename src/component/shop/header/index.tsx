import React from 'react';
import rightArrow from "/public/assets/icons/right-arrow-backup-2-svgrepo-com.svg";
import Image from "next/image";
import Link from 'next/link';

interface IHeaderShop {
    path: string;
}

const HeaderShop: React.FC<IHeaderShop> = (props) => {
    const backgroundImageStyle = {
        backgroundImage: `url('/assets/Rectangle 1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div
            className="w-full overflow-hidden h-auto"
            style={backgroundImageStyle}
        >
            <div className="py-8 md:py-[100px]">
                <div className="flex justify-center items-center h-full text-black ">
                    <p className="text-[1.8rem] md:text-[3rem] font-semibold mb-4">
                        {props.path}
                    </p>
                </div>
                <div className="flex justify-center items-center h-full text-black text-[0.6rem] md:text-[1rem]">
                    <Link href={"/"}>
                        <p className="font-semibold">Home</p>
                    </Link>
                    <Image
                        src={rightArrow}
                        width={10}
                        height={10}
                        alt="arrow"
                        className="mx-2"
                    />
                    <p className="font-semibold">{props.path}</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderShop;
