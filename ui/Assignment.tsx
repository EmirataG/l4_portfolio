"use client";

import { AssignmentType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { GrDocumentSound } from "react-icons/gr";
import { useState } from "react";
import WeekNav from "./WeekNav";

export default function Assignment({
  assignment,
}: {
  assignment: AssignmentType;
}) {
  const prompt: string[] = assignment.prompt.split("\n");
  const paragraphs: string[] | undefined = assignment.text?.split("\n");
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="flex flex-col gap-6 tracking-wider leading-8">
      <header className="flex justify-between">
        <WeekNav week={assignment.id} name={assignment.name} />
        {assignment.audioUrl ? (
          <Link
            className="hover:rotate-12 transition-all active:scale-90"
            href={assignment.audioUrl}
            target="_blank"
          >
            <GrDocumentSound size={30} />
          </Link>
        ) : null}
      </header>
      <div className="text-sm font-light italic">
        <p className="font-semibold">Görev:</p>
        {prompt.map((promptItem, index) => (
          <p key={index}>{promptItem}</p>
        ))}
      </div>
      <hr />
      <h2 className="text-center font-semibold text-2xl">
        {assignment.title
          ? assignment.title
          : "Bu hafta yazma görevimiz yoktu :)"}
      </h2>
      {assignment.text ? (
        <div
          className={
            assignment.center
              ? "flex flex-col gap-4 text-center"
              : "flex flex-col gap-4 text-justify"
          }
        >
          {paragraphs!.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <h2 className="text-center">...</h2>
      )}
      <div className="place-self-center justify-center flex gap-2 flex-wrap">
        {assignment.images.map((imageUrl, index) => (
          <div key={index} className="relative w-76 h-48">
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <Image
              fill
              src={imageUrl}
              alt={`an image for ${assignment.name}`}
              style={{ objectFit: "cover" }}
              onLoadingComplete={() => handleImageLoad(index)}
              className={`transition-opacity duration-300 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
