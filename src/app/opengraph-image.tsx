import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MITRION - The substrate of intelligent capital";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // Load Playfair Display font
    const fontData = await fetch(
        new URL("https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2").toString()
    ).then((res) => res.arrayBuffer()).catch(() => null);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0A0A0A",
                    backgroundImage:
                        "radial-gradient(circle at 50% 50%, rgba(226, 123, 88, 0.15) 0%, transparent 50%)",
                }}
            >
                {/* Grid pattern overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Logo Icon */}
                <svg
                    width="160"
                    height="160"
                    viewBox="0 0 512 512"
                    style={{ marginBottom: 40 }}
                >
                    <g
                        stroke="#EAEAEA"
                        strokeOpacity="0.8"
                        strokeWidth="3"
                        fill="none"
                    >
                        <path d="M256,176 L325.3,216 L325.3,296 L256,336 L186.7,296 L186.7,216 Z" />
                        <path d="M256,96 L325.3,136 L325.3,216 L256,256 L186.7,216 L186.7,136 Z" />
                        <path d="M325.3,136 L394.6,176 L394.6,256 L325.3,296 L256,256 L256,176 Z" />
                        <path d="M325.3,216 L394.6,256 L394.6,336 L325.3,376 L256,336 L256,256 Z" />
                        <path d="M256,256 L325.3,296 L325.3,376 L256,416 L186.7,376 L186.7,296 Z" />
                        <path d="M186.7,216 L256,256 L256,336 L186.7,376 L117.4,336 L117.4,256 Z" />
                        <path d="M186.7,136 L256,176 L256,256 L186.7,296 L117.4,256 L117.4,176 Z" />
                    </g>
                    {/* Nodes */}
                    <circle cx="325.3" cy="256" r="12" fill="#E27B58" />
                    <circle cx="186.7" cy="176" r="10" fill="#E27B58" />
                </svg>

                {/* Wordmark */}
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 700,
                        color: "#EAEAEA",
                        fontFamily: '"Playfair Display", serif',
                        letterSpacing: "-0.02em",
                        marginBottom: 20,
                        textShadow: "0 0 40px rgba(226, 123, 88, 0.3)",
                    }}
                >
                    MITRION
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: 32,
                        color: "#8A8A8A",
                        fontFamily: '"Playfair Display", serif',
                        letterSpacing: "0.05em",
                    }}
                >
                    The substrate of intelligent capital
                </div>
            </div>
        ),
        {
            ...size,
            fonts: fontData
                ? [
                    {
                        name: "Playfair Display",
                        data: fontData,
                        style: "normal",
                        weight: 700,
                    },
                ]
                : undefined,
        }
    );
}
