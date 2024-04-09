import joululanssi from '../../assets/joululanssi4.jpg';
import karvat from '../../assets/karvat.png'
import { ImageType } from '../types/portfolio';
import tulitikkolaatikko from '../../assets/tulitikkulaatikko.png'
import simplex from '../../assets/simplexColorsVaaka.png'
import oranssit from '../../assets/OranssitViivatVaaka.png'
import antColony from '../../assets/antColony.png'
import antColony2 from '../../assets/antColony2.png'
import trees from '../../assets/trees.png'
import colorful from '../../assets/colorful.png'
import whiteMess from '../../assets/whiteAndMessVaaka.png'
import openclosed from '../../assets/openClosed.png'
import revontulet from '../../assets/revontuletVaaka.png'

const images: ImageType = {
    joulu: joululanssi,
    tulitikkulaatikko: tulitikkolaatikko,
    simplex: simplex,
    flow: oranssit,
    antCol: antColony,
    antCol2: antColony2,
    trees: trees,
    colorful: colorful,
    white: whiteMess,
    openclosed: openclosed,
    revontulet: revontulet
};

export const getImageByName = (name?: string) => (!!name && images[name]) ? images[name] : karvat;