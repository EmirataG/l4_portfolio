"use client";
import { useState } from "react";
import Confetti from "react-confetti";

import gift from "@/images/gift.png";
import Image from "next/image";

export default function GiftButton() {
  const [messageShown, setMessageShown] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center transition-all m-7 gap-3">
      {messageShown && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
        />
      )}
      {messageShown ? (
        <div className="p-6 bg-blue-500 text-white rounded-xl w-110">
          <h1 className="font-semibold text-center text-lg">
            Sizinle geçirdiğim harika dönem için teşekkür ederim!
          </h1>
          <hr className="m-2" />
          <p className="text-center font-semibold">Özel teşekkür listesi:</p>
          <div className="place-self-center w-fit">
            <ul className="list-none [&>li]:before:content-['🇹🇷'] [&>li]:before:mr-2">
              <li>Ezgi Yalçın</li>
              <li>Rohan Wassink</li>
              <li>Ayla Karakas</li>
            </ul>
          </div>
        </div>
      ) : null}
      <button
        className="p-5 bg-white/80 shadow-md rounded-full"
        onClick={() => setMessageShown((prevMessageShown) => !prevMessageShown)}
      >
        <Image
          className="size-16 hover:animate-rocking active:scale-90 select-none"
          src={gift}
          alt="gift image"
        />
      </button>
    </div>
  );
}
