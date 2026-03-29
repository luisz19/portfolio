import { useEffect, useRef } from "react";
import * as THREE from "three";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  force: number;
  vx: number;
  vy: number;
}

interface MousePos {
  x: number;
  y: number;
}

const C1 = new THREE.Vector3( );
const C2 = new THREE.Vector3( 15 / 255,  52 / 255, 67 / 255); // #15344365 
const C3 = new THREE.Vector3(); // #10155aff teal
const C4 = new THREE.Vector3(  2 / 255,   6 / 255,  21 / 255); // #051654ff

// Dark base: the near-black
const DARK_BASE = new THREE.Vector3(15 / 255,  25 / 255,  40 / 255); // #0f1928ff

// ─── TouchTexture ─────────────────────────────────────────────────────────────

class TouchTexture {
  size = 48;
  width: number;
  height: number;
  maxAge = 48;
  radius: number;
  speed: number;
  trail: TrailPoint[] = [];
  last: MousePos | null = null;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  texture!: THREE.Texture;

  constructor() {
    this.width = this.height = this.size;
    this.radius = 0.25 * this.size;
    this.speed = 1 / this.maxAge;
    this.initTexture();
  }

  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.texture = new THREE.Texture(this.canvas);
  }

  update() {
    this.clear();
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const point = this.trail[i];
      const f = point.force * this.speed * (1 - point.age / this.maxAge);
      point.x += point.vx * f;
      point.y += point.vy * f;
      point.age++;
      if (point.age > this.maxAge) {
        this.trail.splice(i, 1);
      } else {
        this.drawPoint(point);
      }
    }
    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  addTouch(point: MousePos) {
    let force = 0, vx = 0, vy = 0;
    if (this.last) {
      const dx = point.x - this.last.x;
      const dy = point.y - this.last.y;
      if (dx === 0 && dy === 0) return;
      const d = Math.sqrt(dx * dx + dy * dy);
      vx = dx / d;
      vy = dy / d;
      force = Math.min((dx * dx + dy * dy) * 20000, 2.0);
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  drawPoint(point: TrailPoint) {
    const pos = { x: point.x * this.width, y: (1 - point.y) * this.height };
    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = Math.sin((point.age / (this.maxAge * 0.3)) * (Math.PI / 2));
    } else {
      const t = 1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7);
      intensity = -t * (t - 2);
    }
    intensity *= point.force;

    const radius = this.radius;
    const color = `${((point.vx + 1) / 2) * 255}, ${((point.vy + 1) / 2) * 255}, ${intensity * 255}`;
    const offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = radius;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

// ─── Shaders ─────────────────────────────────────────────────────────────────

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec3  uColor1;
  uniform vec3  uColor2;
  uniform vec3  uColor3;
  uniform vec3  uColor4;
  uniform vec3  uColor5;
  uniform vec3  uColor6;
  uniform float uSpeed;
  uniform float uIntensity;
  uniform sampler2D uTouchTexture;
  uniform float uGrainIntensity;
  uniform vec3  uDarkNavy;
  uniform float uGradientSize;
  uniform float uGradientCount;
  uniform float uColor1Weight;
  uniform float uColor2Weight;

  varying vec2 vUv;

  float grain(vec2 uv, float time) {
    vec2 g = uv * uResolution * 0.5;
    return fract(sin(dot(g + time, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
  }

  vec3 getGradientColor(vec2 uv, float time) {
    float gr = uGradientSize;

    vec2 c1  = vec2(0.5 + sin(time * uSpeed * 0.4 ) * 0.4,  0.5 + cos(time * uSpeed * 0.5 ) * 0.4 );
    vec2 c2  = vec2(0.5 + cos(time * uSpeed * 0.6 ) * 0.5,  0.5 + sin(time * uSpeed * 0.45) * 0.5 );
    vec2 c3  = vec2(0.5 + sin(time * uSpeed * 0.35) * 0.45, 0.5 + cos(time * uSpeed * 0.55) * 0.45);
    vec2 c4  = vec2(0.5 + cos(time * uSpeed * 0.5 ) * 0.4,  0.5 + sin(time * uSpeed * 0.4 ) * 0.4 );
    vec2 c5  = vec2(0.5 + sin(time * uSpeed * 0.7 ) * 0.35, 0.5 + cos(time * uSpeed * 0.6 ) * 0.35);
    vec2 c6  = vec2(0.5 + cos(time * uSpeed * 0.45) * 0.5,  0.5 + sin(time * uSpeed * 0.65) * 0.5 );
    vec2 c7  = vec2(0.5 + sin(time * uSpeed * 0.55) * 0.38, 0.5 + cos(time * uSpeed * 0.48) * 0.42);
    vec2 c8  = vec2(0.5 + cos(time * uSpeed * 0.65) * 0.36, 0.5 + sin(time * uSpeed * 0.52) * 0.44);
    vec2 c9  = vec2(0.5 + sin(time * uSpeed * 0.42) * 0.41, 0.5 + cos(time * uSpeed * 0.58) * 0.39);
    vec2 c10 = vec2(0.5 + cos(time * uSpeed * 0.48) * 0.37, 0.5 + sin(time * uSpeed * 0.62) * 0.43);
    vec2 c11 = vec2(0.5 + sin(time * uSpeed * 0.68) * 0.33, 0.5 + cos(time * uSpeed * 0.44) * 0.46);
    vec2 c12 = vec2(0.5 + cos(time * uSpeed * 0.38) * 0.39, 0.5 + sin(time * uSpeed * 0.56) * 0.41);

    float i1  = 1.0 - smoothstep(0.0, gr, length(uv - c1 ));
    float i2  = 1.0 - smoothstep(0.0, gr, length(uv - c2 ));
    float i3  = 1.0 - smoothstep(0.0, gr, length(uv - c3 ));
    float i4  = 1.0 - smoothstep(0.0, gr, length(uv - c4 ));
    float i5  = 1.0 - smoothstep(0.0, gr, length(uv - c5 ));
    float i6  = 1.0 - smoothstep(0.0, gr, length(uv - c6 ));
    float i7  = 1.0 - smoothstep(0.0, gr, length(uv - c7 ));
    float i8  = 1.0 - smoothstep(0.0, gr, length(uv - c8 ));
    float i9  = 1.0 - smoothstep(0.0, gr, length(uv - c9 ));
    float i10 = 1.0 - smoothstep(0.0, gr, length(uv - c10));

    // Rotating UV layers
    vec2 ru1 = uv - 0.5;
    float a1 =  time * uSpeed * 0.15;
    ru1 = vec2(ru1.x * cos(a1) - ru1.y * sin(a1), ru1.x * sin(a1) + ru1.y * cos(a1)) + 0.5;

    vec2 ru2 = uv - 0.5;
    float a2 = -time * uSpeed * 0.12;
    ru2 = vec2(ru2.x * cos(a2) - ru2.y * sin(a2), ru2.x * sin(a2) + ru2.y * cos(a2)) + 0.5;

    float ri1 = 1.0 - smoothstep(0.0, 0.8, length(ru1 - 0.5));
    float ri2 = 1.0 - smoothstep(0.0, 0.8, length(ru2 - 0.5));

    vec3 color = vec3(0.0);
    color += uColor1 * i1  * uColor1Weight;
    color += uColor2 * i2  * uColor2Weight;
    color += uColor3 * i3  * uColor1Weight;
    color += uColor4 * i4  * uColor2Weight;
    color += uColor5 * i5  * uColor1Weight;
    color += uColor6 * i6  * uColor2Weight;

    if (uGradientCount > 6.0) {
      color += uColor1 * i7  * uColor1Weight;
      color += uColor2 * i8  * uColor2Weight;
      color += uColor3 * i9  * uColor1Weight;
      color += uColor4 * i10 * uColor2Weight;
    }

    color += mix(uColor1, uColor3, ri1) * 0.45 * uColor1Weight;
    color += mix(uColor2, uColor4, ri2) * 0.40 * uColor2Weight;

    color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;

    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(lum), color, 1.1);
    color = pow(color, vec3(1.05));

    // High dark-base floor keeps the output dark while colours remain visible
    float b1 = length(color);
    color = mix(uDarkNavy, color, clamp(b1 * 1.2, 0.0, 0.9));

    float br = length(color);
    if (br > 1.0) color *= 1.0 / br;

    return color;
  }

  void main() {
    vec2 uv = vUv;

    vec4 touch = texture2D(uTouchTexture, uv);
    float vx = -(touch.r * 2.0 - 1.0);
    float vy = -(touch.g * 2.0 - 1.0);
    float intensity = touch.b;
    uv.x += vx * 0.8 * intensity;
    uv.y += vy * 0.8 * intensity;

    vec2  center = vec2(0.5);
    float dist   = length(uv - center);
    float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * intensity;
    float wave   = sin(dist * 15.0 - uTime * 2.0) * 0.03 * intensity;
    uv += vec2(ripple + wave);

    vec3 color = getGradientColor(uv, uTime);
    color += grain(uv, uTime) * uGrainIntensity;

    float ts = uTime * 0.5;
    color.r += sin(ts)        * 0.015;
    color.g += cos(ts * 1.4)  * 0.010;
    color.b += sin(ts * 1.2)  * 0.020;

    float b2 = length(color);
    color = mix(uDarkNavy, color, clamp(b2 * 1.5, 0.0, 0.9));
    color = clamp(color, vec3(0.0), vec3(1.0));

    float br = length(color);
    if (br > 1.0) color *= 1.0 / br;

    gl_FragColor = vec4(color, 1.0);
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────

interface LiquidGradientBackgroundProps {
  /** Optional children rendered on top of the gradient */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function LiquidGradientBackground({
  children,
  className,
  style,
}: LiquidGradientBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
      stencil: false,
      depth: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    mount.appendChild(canvas);

    // ── Scene / Camera ────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.z = 50;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020615);
    const clock = new THREE.Clock();

    // ── Touch texture ─────────────────────────────────────────────────────────
    const touchTexture = new TouchTexture();

    // ── Uniforms ──────────────────────────────────────────────────────────────
    const uniforms: Record<string, THREE.IUniform> = {
      uTime:          { value: 0 },
      uResolution:    { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      // Cycle all 4 colors across 6 slots so they all appear equally
      uColor1:        { value: C1.clone() },
      uColor2:        { value: C2.clone() },
      uColor3:        { value: C3.clone() },
      uColor4:        { value: C4.clone() },
      uColor5:        { value: C1.clone() },
      uColor6:        { value: C3.clone() },
      // Lower intensity = darker overall output
      uSpeed:         { value: 1 },
      uIntensity:     { value: 0.8 },
      uTouchTexture:  { value: touchTexture.texture },
      uGrainIntensity:{ value: 0.05 },
      uDarkNavy:      { value: DARK_BASE.clone() },
      uGradientSize:  { value: 1.6 },
      uGradientCount: { value: 12.0 },
      // Slightly reduced so colours stay muted but readable
      uColor1Weight:  { value: 1 },
      uColor2Weight:  { value: 1 },
    };

    // ── Mesh ──────────────────────────────────────────────────────────────────
    const getViewSize = () => {
      const fovRad = (camera.fov * Math.PI) / 180;
      const height = Math.abs(camera.position.z * Math.tan(fovRad / 2) * 2);
      return { width: height * camera.aspect, height };
    };

    const createGeometry = () => {
      const { width, height } = getViewSize();
      return new THREE.PlaneGeometry(width, height, 1, 1);
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(createGeometry(), material);
    scene.add(mesh);

    // ── Animation loop ────────────────────────────────────────────────────────
    let rafId: number;
    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const delta = Math.min(clock.getDelta(), 0.1);
      touchTexture.update();
      uniforms.uTime.value += delta;
      renderer.render(scene, camera);
    };
    tick();

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      mesh.geometry.dispose();
      mesh.geometry = createGeometry();
    };
    window.addEventListener("resize", onResize);

    // ── Mouse / Touch ─────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      touchTexture.addTouch({
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight,
      });
    };
    const onTouchMove = (e: TouchEvent) => {
      touchTexture.addTouch({
        x: e.touches[0].clientX / window.innerWidth,
        y: 1 - e.touches[0].clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className={className}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
          ...style,
        }}
      />
      {children && (
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          {children}
        </div>
      )}
    </>
  );
}