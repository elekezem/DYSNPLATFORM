interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '工作人员管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>设备组</a> 创建了项目 <a>DYSN P1 VR训练设备1001</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: '平台相关设备的运行维护',
    group: '设备组',
    date: '状态正常',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '视能训练追踪与反馈',
    group: '康复训练组',
    date: '状态正常',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '数据灾备',
    group: '灾备组',
    date: '状态正常',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '统计数据可视化',
    group: '数据可视化组',
    date: '状态正常',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '网络平台安全评估',
    group: '安全组',
    date: '状态正常',
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: '后台维护与数据管理',
    group: '架构组',
    date: '状态正常',
  },
];
