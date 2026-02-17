function GradientMesh() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-bg-base">
            {/* Container fixo para manter proporções */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1920px] h-[1080px]">
                {/* Filtro SVG para granulado */}
                <svg className="absolute w-0 h-0">
                    <filter id="noise">
                        <feTurbulence 
                            type="fractalNoise" 
                            baseFrequency="0.7" 
                            numOctaves="4" 
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0"/>
                    </filter>
                </svg>

                {/* Gradient 1 - Ciano claro (superior direito) */}
                <div 
                    className="absolute top-0 right-0 w-[900px] h-[800px] rounded-full blur-[160px] animate-float-slow"
                    style={{ background: 'rgba(48, 157, 200, 0.7)' }}
                />
                
                {/* Gradient 2 - Azul médio (centro esquerdo) */}
                <div 
                    className="absolute top-0 left-0 w-[900px] h-[600px] rounded-full blur-[100px] animate-float-fast"
                    style={{ background: 'rgba(8, 48, 94, 0.5)' }}
                />
                
                {/* Gradient 3 - Azul escuro (inferior direito) */}
                <div 
                    className="absolute top-[600px] right-0 w-[650px] h-[650px] rounded-full blur-[130px] animate-float-fast"
                    style={{ background: 'rgba(13, 31, 194, 0.45)' }}
                />
            </div>

            {/* Camada de granulado */}
            <div 
                className="absolute inset-0"
                style={{ 
                    filter: 'url(#noise)',
                    mixBlendMode: 'overlay'
                }}
            />
        </div>
    )
}

export default GradientMesh
