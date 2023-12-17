import { useState } from "react";
import { connectWallet } from "./api/events";

function App() {
  const [connected, setConnected] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundImage: "url(./assets/images/home-bg.png)",
        }}
        className="flex flex-col justify-between items-center mx-auto w-full max-w-[1440px] h-[2005px] relative overflow-hidden pt-[196px] bg-[#505]/[0.77]"
      >
        <div className="flex flex-col justify-start items-center  gap-[197px]">
          <div className="flex flex-col justify-start items-center self-stretch  relative gap-9">
            <p className=" text-[80px] font-bold text-center text-[#de1f04]">
              Welcome
            </p>
            <p className=" text-4xl text-center text-[#de1f04]">
              please Connect your MetaMask Wallet
            </p>
          </div>
          <button
            onClick={async () => {
              setConnected(false);
              const response = await connectWallet();
              if (!response) {
                alert("something went wrong");
              } else {
                const { provider, signer, address } = response;
                setConnected(true);
              }
            }}
            className={`flex flex-col w-full justify-start items-start  relative gap-2.5 p-2.5 rounded-xl ${
              connected ? "bg-green-400" : "bg-[#bdaee8]"
            }`}
          >
            {connected ? (
              <p className="w-full">Connected</p>
            ) : (
              <img
                src="./assets/images/metamask.png"
                className="h-[115px] rounded-[50px] object-cover"
              />
            )}
          </button>
        </div>
        <img
          src="./assets/images/home-illustration.png"
          className=" w-[1440px] h-[1048px] object-none"
        />
      </div>
    </>
  );
}

export default App;
