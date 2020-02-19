import React from "react";

import basic from "../images/hs-icons/SVG/Set_Basic.svg";
import classic from "../images/hs-icons/SVG/Set_Classic.svg";

import goblinsVsGnones from "../images/hs-icons/SVG/Set_GVG.svg";
import oldGods from "../images/hs-icons/SVG/Set_OG.svg";
import blackRockMountain from "../images/hs-icons/SVG/Set_BRM.svg";
import meanStreetsOfGadgetzan from "../images/hs-icons/SVG/Set_Gadgetzan.svg";
import hallOfFame from "../images/hs-icons/SVG/Set_HOF.svg";
import theGrandTournament from "../images/hs-icons/SVG/Set_TGT.svg";
import naxxaramas from "../images/hs-icons/SVG/Set_Naxx.svg";
import koboldsAndCatacombs from "../images/hs-icons/SVG/Set_LOOT.svg";
import karazhan from "../images/hs-icons/SVG/Set_Kara.svg";
import icecrown from "../images/hs-icons/SVG/Set_ICC.svg";
import leagueOfExplorers from "../images/hs-icons/SVG/Set_LOE.svg";
import ungoro from "../images/hs-icons/SVG/Set_Ungoro.svg";

import witchwood from "../images/hs-icons/SVG/Set_WOOD.svg";
import boomsday from "../images/hs-icons/SVG/Set_BOOM.svg";
import rastakhansRumble from "../images/hs-icons/SVG/Set_Troll.svg";

import riseOfShadows from "../images/hs-icons/SVG/Set_Shadows.svg";
import saviorsOfUldum from "../images/hs-icons/SVG/Set_Saviors.svg";
import decentOfDragons from "../images/hs-icons/SVG/Set_Dragons.svg";

const SetIcon = props => {
  const getIcon = setName => {
    let targetImg = classic
    switch(setName){
        case "Goblins Vs Gnomes":
            return goblinsVsGnones;
        default:
            return classic
    }
  };
  return <img src={getIcon(props.setName)} alt="card-set-icon" className="icon" />;
};

export default SetIcon;
