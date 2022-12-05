import { BASE, EN, FULL, OPTIONS, R1300, R800, RU } from "./types";

export function ru(){
  return {
    type: RU,
  }
};
export function en(){
  return{
    type: EN,
  }
};
export function r1300(){
  return{
    type: R1300,
  }
};
export function r800(){
  return{
    type: R800,
  }
};
export function base(){
  return{
    type: BASE,
  }
};
export function options(){
  return{
    type: OPTIONS,
  }
};
export function full(){
  return{
    type: FULL,
  }
};

export function initLang(){
  localStorage.getItem(`language`) == null 
    ? localStorage.setItem(`language`, RU)
    : null;
  sessionStorage.getItem(`mashine`) == null
    ? sessionStorage.setItem(`mashine`, R1300)
    : null;
  sessionStorage.getItem(`complect`) == null
    ? sessionStorage.setItem(`complect`, BASE)
    : null;
  return{
    type: `language`,
  }
};
export function initMashine(){
  return{
    type: `mashine`,
  }
};
export function initComplect(){
  return{
    type: `complect`,
  }
};