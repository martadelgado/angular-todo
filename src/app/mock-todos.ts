import {Todo} from './todo';

export const TODOS: Todo[] = [
  {
    id: 1,
    title: 'Learn Angular',
    description: 'Create Angular app following Tour of Heroes tutorial. Learn Angular fundamentals including components, services, routing and fetching data from a server.',
    dueDate: '2021-01-18',
    isChecked: false,
    borderColor: '#FF33DA',
  },
  {
    id: 2,
    title: 'Content Square Implementation',
    description: 'Investigate new data analytics tool, Content Square, and research the best implementation method. Meet with content square technical support team to discuss these implementation methods and testing.',
    dueDate: '2021-02-04',
    isChecked: false,
    borderColor: '#338DFF',
  },
  {
    id: 3,
    title: 'Improve Local Environment',
    description: 'Investigate ways to improve Docker performance with Mac. Attempt to lighten local database without compromising testing efficiency and access to common boats. Improve speed of mac by freeing up ram and storage space.',
    dueDate: '2021-03-19',
    isChecked: false,
    borderColor: '#06E636',
  },
];
