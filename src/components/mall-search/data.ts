export type MallProduct = {
  id: string
  model: string
  brand: string
  category: string
  spec: string
  title: string
  price: string
  originalPrice?: string
  stock: string
  delivery: string
  store: string
  badge: string
  tags: string[]
  art: 'capacitor' | 'mcu' | 'power' | 'connector' | 'mosfet' | 'sensor'
  accent: string
}

export const relatedKeywords = ['10uF 10V', 'X5R 0603', '贴片电容', '陶瓷电容', '村田电容', '三星电容', '电源滤波', '去耦电容']

export const inspirationTags = ['现货充足', '国产替代', '汽车级', '低 ESR', '小封装', '高可靠', '样品可购', '批量优惠']

export const categoryTabs = ['全部商品', '新品', '店铺', '企业采购', '工业品']

export const qualityTabs = ['综合', '9成新', '99成新', '95成新', '全新未拆封', '未检测', '准新品']

export const filterChips = ['商城物流', '国家补贴', '超级补贴', '自营/旗舰', '品牌授权', '货到付款']

export const mallProducts: MallProduct[] = [
  {
    id: 'cl10a106',
    model: 'CL10A106KP8NNNC',
    brand: 'SAMSUNG',
    category: '贴片陶瓷电容',
    spec: '10uF ±10% 10V X5R 0603',
    title: '三星贴片电容 CL10A106KP8NNNC 10uF 10V X5R 0603 原装现货',
    price: '¥0.012',
    originalPrice: '¥0.018',
    stock: '18,000',
    delivery: '今日达',
    store: '华强自营仓',
    badge: '自营',
    tags: ['国家补贴', '到店自取', '样品可购'],
    art: 'capacitor',
    accent: '#2563EB',
  },
  {
    id: 'grm188',
    model: 'GRM188R61A106KE15D',
    brand: 'MURATA',
    category: '贴片陶瓷电容',
    spec: '10uF ±10% 10V X5R 0603',
    title: 'Murata 村田 GRM188R61A106KE15D 0603 电容 官方授权',
    price: '¥0.011',
    originalPrice: '¥0.016',
    stock: '26,000',
    delivery: '送货上门',
    store: '村田授权经销',
    badge: '授权',
    tags: ['官方正品', '包邮', '批量价'],
    art: 'capacitor',
    accent: '#3B82F6',
  },
  {
    id: 'stm32f103',
    model: 'STM32F103C8T6',
    brand: 'ST',
    category: 'MCU 微控制器',
    spec: 'ARM Cortex-M3 72MHz LQFP48',
    title: 'ST STM32F103C8T6 单片机 MCU 开发常用型号 原装正品',
    price: '¥8.90',
    originalPrice: '¥11.20',
    stock: '4,500',
    delivery: '现货速发',
    store: '意法旗舰仓',
    badge: '全球购',
    tags: ['原装正品', '5千+人浏览', '技术资料'],
    art: 'mcu',
    accent: '#1D4ED8',
  },
  {
    id: 'tps54202',
    model: 'TPS54202DDCR',
    brand: 'TI',
    category: '电源管理芯片',
    spec: '4.5V-28V 2A SOT23-6',
    title: 'TI TPS54202DDCR 降压转换器 DCDC 电源芯片 SOT23-6',
    price: '¥1.26',
    originalPrice: '¥1.86',
    stock: '12,800',
    delivery: '今日发货',
    store: '德州仪器合作仓',
    badge: '自营',
    tags: ['到店自取', '国家补贴', '替代推荐'],
    art: 'power',
    accent: '#2563EB',
  },
  {
    id: 'usb-c-16p',
    model: 'TYPE-C-16P',
    brand: 'Korean Hroparts',
    category: 'USB 连接器',
    spec: 'Type-C 16Pin 贴片母座',
    title: 'USB-C 16P 母座 沉板贴片连接器 快充接口 高寿命',
    price: '¥0.18',
    originalPrice: '¥0.28',
    stock: '62,000',
    delivery: '次日达',
    store: '连接器优选店',
    badge: '热销',
    tags: ['高速接口', '样品可购', '包邮'],
    art: 'connector',
    accent: '#0EA5E9',
  },
  {
    id: 'ao3400a',
    model: 'AO3400A',
    brand: 'AOS',
    category: 'MOSFET',
    spec: 'N 沟道 30V 5.8A SOT23',
    title: 'AO3400A 场效应管 N-MOS SOT23 低导通阻 原装现货',
    price: '¥0.18',
    originalPrice: '¥0.26',
    stock: '36,500',
    delivery: '送货上门',
    store: '功率器件专营',
    badge: '精选',
    tags: ['低 Rds(on)', '立减优惠', '正品鉴别'],
    art: 'mosfet',
    accent: '#0F766E',
  },
  {
    id: 'sht30',
    model: 'SHT30-DIS-B',
    brand: 'Sensirion',
    category: '温湿度传感器',
    spec: '数字输出 I2C DFN-8',
    title: 'Sensirion SHT30-DIS-B 温湿度传感器 高精度 I2C 接口',
    price: '¥13.80',
    originalPrice: '¥16.50',
    stock: '2,180',
    delivery: '48小时内发',
    store: '传感器原厂仓',
    badge: '新品',
    tags: ['高精度', '资料齐全', '小批量'],
    art: 'sensor',
    accent: '#0891B2',
  },
  {
    id: 'mcp2562',
    model: 'MCP2562FD-E/SN',
    brand: 'Microchip',
    category: 'CAN 收发器',
    spec: 'CAN FD SOIC-8 工业级',
    title: 'Microchip MCP2562FD-E/SN CAN FD 收发器 车载通信芯片',
    price: '¥3.80',
    originalPrice: '¥4.60',
    stock: '3,200',
    delivery: '今日达',
    store: 'Microchip 授权店',
    badge: '授权',
    tags: ['工业级', '车载应用', '原装正品'],
    art: 'mcu',
    accent: '#1E40AF',
  },
]
