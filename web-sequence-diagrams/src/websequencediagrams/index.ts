import websequencediagrams from 'websequencediagrams';

export const wsd = (text: string, theme: string = "modern-blue", ext: string = 'png'): Promise<any> => {
  return new Promise((resolve, reject) => {
    websequencediagrams.diagram(text, theme, ext, function(er, buf, typ) {
      if (er) {
        reject(er);
        return er;
      }

      resolve(buf);
      return buf;
    });
  });
  
  
};
