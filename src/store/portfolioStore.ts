import create from 'zustand';
import { PortfolioState } from '../types/portfolio';
import { getIngress, getPortfolio } from './references';
import { getImageByName } from './images';


export const usePortfolioStore = create<PortfolioState>()((set) => ({
  portfolio: getPortfolio(),
  ingress: getIngress(),
  getImage: (name) => getImageByName(name)
  }));
