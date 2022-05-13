import { forwardRef, useState } from "react";
import images from "../../assets/Images";

console.log(images.noImage);
function Image({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const hanldError = () => {
        setFallback(customFallback)
    }
    return <img src={fallback || src} alt={alt} ref={ref} {...props} onError={hanldError} />
}
export default forwardRef(Image);