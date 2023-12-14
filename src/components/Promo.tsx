import React from "react";
import Carroucel from "./Carroucel";

export default function Promo(){

  return (
    <>
      <div className="flex promo relative">
        <div className="divisor-1 flex-1"></div>
        <div className="divisor-2 flex-1"></div>
        <div className="container-carroucel absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Carroucel/>
        </div>
      </div>
    </>
  );
}