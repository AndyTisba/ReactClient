"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export const getMyHobbies = () => {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        imageUrl: "/photo-camera.svg",
        title: "Photography",
        description:
          "I especially like food photography and food stylism to embrace my creativity",
        categories: ["photography", "art"],
        note: "I take photos, not selfies 🙅🏻‍♀️"
      },
      {
        id: 2,
        imageUrl: "/roller-skates.svg",
        title: "Roller blade",
        description: "I love the feeling of freedom rollerskating gives me",
        categories: ["free", "extreme", "urban"],
        note: "Falling is not failing, Ruben 💪🏻"
      },
      {
        id: 3,
        imageUrl: "/books.svg",
        title: "Self-development books",
        description: "I only buy e-books because I'm a minimalist",
        categories: ["growth", "improvement"],
        note: "One book that changed my life: Feel the Fear and Do it Anyway (like applying for this internship) 😱"
      },
    ]);
  });
};

export function CardList ({hobbies}) {
  const [selectedId, setSelectedId] = useState(null);

  function handleDisplayCard(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flex justify-between">
      {hobbies.map(hobby => 
        <Card key={hobby.id} hobby={hobby} selectedId={selectedId} onDisplayCard={handleDisplayCard} />
      )}
    </div>
  )
}

export function Card ({hobby, selectedId, onDisplayCard}) {
  return (
    <div 
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:scale-105 hover:bg-sky-950"
      onClick={() => onDisplayCard(hobby.id)}
    >
      {selectedId !== hobby.id ? (
        <>
          <img className="w-12 m-auto pt-6" src={hobby.imageUrl} alt={hobby.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{hobby.title}</div>
            <p className="text-gray-700 text-base">
              {hobby.description}
            </p>
          </div>
          {/* //TODO: fix unique key */}
          <div className="px-6 pt-4 pb-2	">
            {hobby.categories.map(category => (
              <Category key={hobby.id} category={category}/>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full p-6">
          <h2 className="text-xl">
            {hobby.note}
          </h2>
        </div>
      )}
    </div>
  )
}

export function Category ({category}) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
      #{category}
    </span>
  )
}

export default function Home() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const data = await getMyHobbies();
        setHobbies(data);
        console.log(data);
      } catch (error) {
        
      }
    }
    fetchData();
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-50 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-slate-950 lg:p-4 lg:dark:bg-zinc-800/30 cursor-pointer hover:scale-105	">
          My Hobbies
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:scale-105"
            href="https://stephanieong.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <p>Stéphanie Ong</p>
          </a>
        </div>
      </div>

      {/* //TODO: style qui écrase le style des Card */}
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-blue-900 after:via-slate-900 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-800 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div> */}
        <CardList hobbies={hobbies} /> 

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
