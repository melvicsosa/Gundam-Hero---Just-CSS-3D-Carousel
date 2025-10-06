/* 
    This component is a 3D carousel that uses CSS variables to control the number of cards and their positions
*/

// Array of gundam cards images
const images = Array.from({ length: 10 }, (_, i) => ({
    src: `/assets/gundam_${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Gundam Card ${String(i + 1).padStart(2, '0')}`
}))

// Hero component 
export default function Hero() {
    return (
        <div className="hero">
            <div
                className="slider"
                style={{ '--cardQty': images.length }}
            >
                {images.map((img, idx) => (
                    <div
                        key={img.src}
                        className="item"
                        style={{ '--cardPos': idx + 1 }}
                    >
                        <img className="image" src={img.src} alt={img.alt} />
                    </div>
                ))}
            </div>

            <div className="content-area">
                <h1 className="title" data-content="GUNDAM-X">GUNDAM-X</h1>
                <div className="model" aria-hidden="true" />
            </div>
        </div>
    )
}