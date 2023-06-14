/**source can be thumbnail, hd, or sd */
export const getPlaceholder = (fileName:any, source: string):string => {
    let fileSource: RegExp;
    switch(source){
        case 'thumbnail':
            fileSource = /thumbnail\//
            break;
        case 'hd':
            fileSource = /hd-images\//
            break;
        default :
            fileSource = /sd-images\//
            break;
    }
    return fileName.replace(fileSource, 'placeholder/').replace(/\.[^/.]+$/ , '-small.jpg');
  }
export const blurryStyle = (fileName: any, source: string) => (
    {
    background: `url(${getPlaceholder(fileName, source)})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    width:`100%`,
    height:`100%`
  })