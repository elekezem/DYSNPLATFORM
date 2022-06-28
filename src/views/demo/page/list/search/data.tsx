import { FormSchema } from '/@/components/Form/index';

export const searchList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: '北京德眼视能管理平台',
      description: ['Vben', '设计语言', 'Typescript'],
      content: '北京德眼视能管理系统。',
      time: '2022-06-25 11:20',
    });
  }
  return result;
})();

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'InputSearch',
    label: '项目名',
    colProps: {
      span: 8,
    },
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
  },
];
