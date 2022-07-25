// import {MTS} from "../components/SvgComponents/MTS";
// import {Megafon} from "../components/SvgComponents/Megafon";
// import {Beeline} from "../components/SvgComponents/Beeline";
import { IOperator } from "../types/OperatorType";
import MTS from '../assets/images/icons/MTS.svg';
import Megafon from '../assets/images/icons/Megafon.svg';
import Beeline from '../assets/images/icons/Beeline.svg';

export const operators: IOperator[] = [
  {
    id: 0,
    name: 'МТС',
    image: MTS
  },
  {
    id: 1,
    name: 'Megafon',
    image: Megafon
  },
  {
    id: 2,
    name: 'Beeline',
    image: Beeline
  }
];