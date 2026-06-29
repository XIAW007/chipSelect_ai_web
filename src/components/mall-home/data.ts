import {
  BatteryCharging,
  Bot,
  Cable,
  Cpu,
  Gauge,
  Grid2X2,
  Layers3,
  Microchip,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from 'lucide-react'

export const categoryMenus = [
  {
    icon: BatteryCharging,
    title: '被动元件',
    children: ['电容', '电阻', '电感', '磁珠', '滤波器'],
    groups: [
      { title: '电容', items: ['陶瓷电容', '钽电容', '铝电解电容', '薄膜电容', '安规电容', '超级电容'] },
      { title: '电阻', items: ['贴片电阻', '插件电阻', '精密电阻', '采样电阻', '压敏电阻', '热敏电阻'] },
      { title: '电感', items: ['功率电感', '贴片电感', '共模电感', '磁珠', '工字电感', '射频电感'] },
      { title: '保护器件', items: ['保险丝', 'TVS管', 'ESD保护', '气体放电管', '自恢复保险丝'] },
    ],
  },
  {
    icon: Microchip,
    title: '半导体器件',
    children: ['二极管', '三极管', 'MOSFET', '逻辑芯片'],
    groups: [
      { title: '二极管', items: ['整流二极管', '肖特基二极管', '开关二极管', '稳压二极管', '发光二极管'] },
      { title: '晶体管', items: ['三极管', 'MOSFET', 'IGBT', '达林顿管', '光耦输出晶体管'] },
      { title: '逻辑器件', items: ['门电路', '触发器', '移位寄存器', '电平转换', '缓冲器'] },
      { title: '功率器件', items: ['功率MOS', '整流桥', '可控硅', '功率模块'] },
    ],
  },
  {
    icon: Cpu,
    title: '集成电路 IC',
    children: ['MCU', '存储器', '接口芯片', '模拟芯片'],
    groups: [
      { title: '处理器', items: ['MCU', 'MPU', 'DSP', 'FPGA', 'CPLD'] },
      { title: '存储器', items: ['EEPROM', 'FLASH', 'SRAM', 'DRAM', 'FRAM'] },
      { title: '接口芯片', items: ['USB', 'CAN', 'RS485', '以太网', '电平转换'] },
      { title: '模拟芯片', items: ['运算放大器', '比较器', 'ADC', 'DAC', '基准源'] },
    ],
  },
  {
    icon: Zap,
    title: '电源管理',
    children: ['DC-DC', 'LDO', '充电管理', '电源模块'],
    groups: [
      { title: '转换器', items: ['DC-DC降压', 'DC-DC升压', '隔离电源', 'AC-DC', '电源模块'] },
      { title: '稳压器', items: ['LDO', '线性稳压', '基准电压', '负压稳压'] },
      { title: '电池管理', items: ['充电管理', '保护芯片', '电量计', '均衡芯片'] },
      { title: '驱动控制', items: ['LED驱动', '马达驱动', '栅极驱动', '热插拔控制'] },
    ],
  },
  {
    icon: Cable,
    title: '连接器',
    children: ['板对板', '线对板', '端子', 'USB连接器'],
    groups: [
      { title: '板级连接', items: ['板对板', '排针排母', 'FPC/FFC', '牛角座', '简牛'] },
      { title: '线缆连接', items: ['线对板', '线对线', '端子台', '接线端子', '压线端子'] },
      { title: '接口连接', items: ['USB', 'Type-C', 'HDMI', 'RJ45', '音频座', 'SIM卡座'] },
      { title: '射频连接', items: ['SMA', 'IPEX', 'BNC', '天线座'] },
    ],
  },
  {
    icon: Gauge,
    title: '传感器',
    children: ['温度', '压力', '光电', '位置传感器'],
    groups: [
      { title: '环境感知', items: ['温湿度', '气压', '气体', '光照', '空气质量'] },
      { title: '运动姿态', items: ['加速度', '陀螺仪', '磁传感器', 'IMU', '震动传感器'] },
      { title: '工业检测', items: ['压力', '霍尔', '接近', '液位', '电流传感器'] },
      { title: '光电声学', items: ['红外', '光电开关', '麦克风', '超声波'] },
    ],
  },
  {
    icon: Grid2X2,
    title: '开发工具',
    children: ['开发板', '烧录器', '测试夹具', '仪器仪表'],
    groups: [
      { title: '开发板', items: ['MCU开发板', 'FPGA开发板', '物联网模块', '传感器模块'] },
      { title: '编程调试', items: ['烧录器', '仿真器', '调试器', '下载线'] },
      { title: '测试工具', items: ['万用表', '示波器', '逻辑分析仪', '电源', '电子负载'] },
      { title: '耗材配件', items: ['杜邦线', '面包板', '测试夹', '探针', '焊接工具'] },
    ],
  },
]

export const hotKeywords = ['10uF 10V X5R 0603', 'STM32F103C8T6', 'TPS54202', '1N4148', 'LM2596', 'USB-C 16P']

export const quickServices = [
  { icon: Bot, title: 'AI选型', desc: '按需求推荐器件' },
  { icon: Layers3, title: 'BOM配单', desc: '批量匹配价格库存' },
  { icon: PackageCheck, title: '现货查询', desc: '优先展示可交付' },
  { icon: ShieldCheck, title: '替代料', desc: '寻找兼容型号' },
]

export const productSections = [
  {
    title: '热门器件',
    subtitle: '库存稳定，适合快速打样和量产',
    products: [
      { model: 'CL10A106KP8NNNC', brand: 'SAMSUNG', category: '贴片电容', spec: '10uF ±10% 10V X5R 0603', stock: '18,000', price: '¥0.012', tag: '现货' },
      { model: 'GRM188R61A106KE15D', brand: 'MURATA', category: '贴片电容', spec: '10uF ±10% 10V X5R 0603', stock: '26,000', price: '¥0.011', tag: '热销' },
      { model: 'STM32F103C8T6', brand: 'ST', category: 'MCU', spec: 'ARM Cortex-M3 72MHz LQFP48', stock: '4,500', price: '¥8.90', tag: '推荐' },
      { model: 'TPS54202DDCR', brand: 'TI', category: '降压芯片', spec: '4.5V-28V 2A SOT23-6', stock: '12,800', price: '¥1.26', tag: '现货' },
    ],
  },
  {
    title: 'AI 推荐器件',
    subtitle: '根据搜索热度和工程选型场景推荐',
    products: [
      { model: 'LM2596S-5.0', brand: 'TI', category: '电源模块', spec: '降压稳压 5V TO-263', stock: '9,260', price: '¥2.15', tag: '替代多' },
      { model: 'SS14', brand: 'YJ', category: '肖特基二极管', spec: '1A 40V SMA', stock: '80,000', price: '¥0.036', tag: '低价' },
      { model: 'AO3400A', brand: 'AOS', category: 'MOSFET', spec: 'N沟道 30V 5.8A SOT23', stock: '36,500', price: '¥0.18', tag: '常用' },
      { model: 'MCP2562FD-E/SN', brand: 'Microchip', category: 'CAN收发器', spec: 'CAN FD SOIC-8', stock: '3,200', price: '¥3.80', tag: '车载' },
    ],
  },
]

export const brandItems = ['SAMSUNG', 'MURATA', 'YAGEO', 'TI', 'ST', 'NXP', 'Microchip', 'Infineon']

export const mallStats = [
  { label: '器件数量', value: '120万+' },
  { label: '合作品牌', value: '260+' },
  { label: '参数字段', value: '380+' },
  { label: 'BOM 响应', value: '< 30s' },
]

export const heroBadges = [
  { icon: Sparkles, text: '自然语言检索' },
  { icon: Truck, text: '库存实时同步' },
  { icon: ShieldCheck, text: '替代料推荐' },
]
