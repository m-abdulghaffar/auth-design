import React from "react";

const GamePage = () => {
  return (
    <>
      <div>
        <div className="container grid grid-cols-3 gap-3 borderContain">
          <div className="m-3 col-span-2">
            <p className="text-red-500">
              In Quantitaive Supply Chain we trust!
            </p>
            <h1 className="font-bold text-2xl">Skuz Supply Chain</h1>
            <h1 className="font-bold text-2xl">Madness Game</h1>
            <p>
              The Supply Chain Game is an online supply network simulator. In a
              typical setting students are divided into teams and compete
              against each other in one or two assignments lasting a week each.
              To meet different demand patterns in five regions, student teams
              set production and inventory control parameters, transportation
              choices, and add new factories and warehouses.
            </p>
            <button className="bg-red-600 rounded-md w-20 text-xs py-2 mt-2 text-white">
              Buy Now
            </button>
          </div>
          <div className="m-5">
            <img src="/card1.jpeg" className="max-w-full h-auto"></img>
          </div>
        </div>

        <div className="container grid grid-cols-2 gap-2 borderContain">
          <div className="m-4">
            <iframe
              width="350"
              height="180"
              src="https://www.youtube.com/embed/ft30zcMlFao?si=UFudKMhnnLtMNYGp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="m-5">
            <p>
              Skuz is a strategic card game that will allow you to expereince
              the crazy world of supply chain.The Supply Chain Game is an online
              supply network simulator.
            </p>
            <ul className="list-disc ml-4">
              <li>2-5 players</li>
              <li>30 minutes to play</li>
              <li>54 cards, 6 Boss cards, 60 coins</li>
              <li>
                <span className="font-bold">Disclaimer</span> not recommended
                for supply chain practitioners under 3 years
              </li>
            </ul>
          </div>
        </div>

        <div className="container grid grid-cols-2 gap-2 borderContain">
          <div className="m-7">
            <p>
              Skuz is a strategic card game that will allow you to expereince
              the crazy world of supply chain.The Supply Chain Game is an online
              supply network simulator.
            </p>
          </div>
          <div className="m-4">
            <iframe
              width="350"
              height="180"
              src="https://www.youtube.com/embed/ft30zcMlFao?si=UFudKMhnnLtMNYGp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="container borderContain py-8" style={{backgroundImage:`url('/bg.jpeg')`}}>
          <div className="container w-3/4 mx-auto bg-white border rounded-lg flex">
            <div className="m-7 basis-1/2">
              <p>
                Skuz is a strategic card game that will allow you to expereince
                the crazy world of supply chain.The Supply Chain Game is an
                online supply network simulator.
              </p>
              <button className="bg-red-600 rounded-md w-20 text-xs py-2 text-white mt-2">
              See Library
            </button>
            </div>

            <div className="m-5">
              <img src="/img1.jpeg" className="max-w-full h-auto"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
