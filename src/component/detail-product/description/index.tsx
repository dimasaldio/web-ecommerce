/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IDescription{
  gambar: string[]
}

export default function Description({gambar}:IDescription) {
  return (
    <>
      <div className="flex flex-col md:col-start-2 md:col-span-4">
        <div className="text-[1rem] md:text-[2rem] font-bold text-center">
          <p>Description</p>
        </div>
        <div className="text-[0.5rem] md:text-[1.2rem] font-light text-justify my-2">
          <p>
            Embodying the raw, wayward spirit of rock n roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
        </div>
        <div className="text-[0.5rem] md:text-[1.2rem] text-justify font-light ">
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>
      <div className="md:col-start-1 md:col-span-6">
        <div className="grid grid-cols-2 w-full gap-4 my-4 md:my-8">
          <div className="w-full md:my-8">
            <img
              src={gambar[0]}
              width={80}
              height={80}
              alt="foto-desc"
              className="w-full md:w-[1000px] md:h-[500px]"
            />
          </div>
          <div className="w-full md:my-8">
            <img
              src={gambar[1]}
              width={80}
              height={80}
              alt="foto-desc"
              className="w-full md:w-[1000px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
