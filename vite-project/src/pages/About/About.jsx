import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-yellow-400">
          <div>
            <h1 className="text-3xl text-center font-semibold mt-10 font-serif">
              Welcome to our currency converter
            </h1>
            <p className="text-center mx-60 mt-10 font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, earum.
              Delectus cupiditate quo libero obcaecati, repudiandae dolorem
              similique? Fugiat maiores provident at aliquam ad dicta debitis, iste
              eos voluptatum laborum.
            </p>
          </div>
      </main>
      <Footer />
    </>
  );
}
