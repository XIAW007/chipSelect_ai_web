import {
  BatteryCharging,
  Blocks,
  Camera,
  CheckCircle2,
  Cpu,
  Database,
  Disc3,
  Gauge,
  Grid2X2,
  Layers3,
  MessageCircle,
  Microchip,
  RefreshCw,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'

export const hotSearches = ['10uF 10V X5R 0603', '100nF 0402 16V', '电阻 10K 1% 0603', '二极管 1N4148', 'TPS54202']

export const categories = [
  { icon: BatteryCharging, title: '被动元件', desc: '电容、电阻、电感等', count: '128,345+ 型号' },
  { icon: Microchip, title: '主动元件', desc: 'IC、二极管、三极管等', count: '96,782+ 型号' },
  { icon: Disc3, title: '连接器', desc: '板对板、线到板等', count: '45,631+ 型号' },
  { icon: Zap, title: '电源管理', desc: 'DC-DC、LDO、充电等', count: '32,890+ 型号' },
  { icon: Gauge, title: '传感器', desc: '温度、压力、光电等', count: '18,765+ 型号' },
  { icon: Grid2X2, title: '全部分类', desc: '共 12 大类', count: '更多选择' },
]

export const trends = [
  { name: '10uF 10V X5R 0603', trend: 'up' },
  { name: '100nF 0402 16V', trend: 'up' },
  { name: '电阻 10K 1% 0603', trend: 'up' },
  { name: '1N4148', trend: 'up' },
  { name: 'LM2596', trend: 'up' },
  { name: 'TPS54202', trend: 'up' },
  { name: '2.2uF 25V X7R 0603', trend: 'up' },
  { name: 'AMS1117 3.3V', trend: 'down' },
  { name: 'SS14', trend: 'down' },
  { name: 'AO3400', trend: 'flat' },
  { name: 'MBR120', trend: 'flat' },
  { name: 'IRLML6344', trend: 'flat' },
  { name: 'USB-C 16P', trend: 'flat' },
]

export const recommendations = [
  {
    model: 'CL10A106KP8NNNC',
    brand: '三星 (SAMSUNG)',
    spec: '10uF ±10% 10V X5R 0603',
    stock: '18,000',
    price: '¥0.012',
    accent: '#8B6F4E',
  },
  {
    model: 'GRM188R61A106KE15D',
    brand: '村田 (MURATA)',
    spec: '10uF ±10% 10V X5R 0603',
    stock: '26,000',
    price: '¥0.011',
    accent: '#D8DDE8',
  },
  {
    model: '0603X106K4R0CTU',
    brand: 'YAGEO (国巨)',
    spec: '10uF ±10% 10V X5R 0603',
    stock: '15,000',
    price: '¥0.013',
    accent: '#5F6068',
  },
  {
    model: 'C0603C106K8PACTU',
    brand: 'KEMET',
    spec: '10uF ±10% 10V X5R 0603',
    stock: '9,000',
    price: '¥0.014',
    accent: '#9B744A',
  },
  {
    model: 'CL10A105KA8NNNC',
    brand: '三星 (SAMSUNG)',
    spec: '1uF ±10% 10V X5R 0603',
    stock: '32,000',
    price: '¥0.008',
    accent: '#9E7B4F',
  },
]

export const advantages = [
  { icon: MessageCircle, title: '更懂你的需求', desc: '自然语言理解，精准匹配' },
  { icon: Database, title: '海量数据支持', desc: '覆盖 1000万+ 元器件型号' },
  { icon: CheckCircle2, title: '实时库存更新', desc: '对接供应链，库存数据实时同步' },
  { icon: ShieldCheck, title: '精准参数匹配', desc: '多维度算法，推荐更合适的型号' },
  { icon: Blocks, title: '快速高效', desc: '从搜索到结果，节省 80% 时间' },
]

export const heroDecorations = [
  { className: 'left-[61%] top-[64px] size-10' },
  { className: 'right-[7%] top-[60px] size-12' },
  { className: 'left-[70%] bottom-[35px] size-8' },
]

export const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  flat: RefreshCw,
}

export const guideIcons = {
  camera: Camera,
  all: RefreshCw,
  cpu: Cpu,
  layers: Layers3,
}
