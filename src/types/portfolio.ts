
export type PortfolioReference = Reference[];

export type Reference = {
  title: string;
  description: string;
  liveUrl?: string;
  codeUrl?: string, 
  img?: string;
  };


export type PortfolioState = {
    portfolio: PortfolioReference;
    ingress: Reference;
    getImage: (name: string) => any;
};
  

export type ImageType =  { [key: string]: any }