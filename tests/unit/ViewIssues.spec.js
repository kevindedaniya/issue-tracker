import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ViewIssues from '@/components/ViewIssues.vue';
import IssueCard from '@/components/IssueCard.vue';

let wrapper;
let store;
let getters;
const localVue = createLocalVue();
localVue.use(Vuex);

beforeEach(() => {
  getters = {
    getIssues: () => {
      return [
        {
          id: '1a',
          summary: 'Explicabo laboriosam eos',
          severity: 'high',
          due_date: '2020-12-31',
          assigned_to: 1,
          status: 'to_do',
          description: 'phasellus rem voluptas ullamcorper facere',
        },
        {
          id: '2a',
          summary: 'laboriosam eos Explicabo',
          severity: 'high',
          due_date: '2020-12-31',
          assigned_to: 2,
          status: 'in_progress',
          description: 'ullamcorper facere phasellus rem voluptas',
        },
      ];
    },

    getStatus: () => {
      return [
        {
          flag: 'to_do',
          display_flag: 'To Do',
          color_class: 'secondary',
        },
        {
          flag: 'in_progress',
          display_flag: 'In Progress',
          color_class: 'primary',
        },
      ];
    },

    getUsers: () => {
      return [
        {
          id: 1,
          name: 'laboriosam eos',
        },
        {
          id: 2,
          name: 'earum justo',
        },
      ];
    },

    getOpenIssues: () => this.getIssues,

    getUserName: () => {
      return () => 'laboriosam eos';
    },

    getIssue: () => {
      return {
        id: '1a',
        summary: 'Explicabo laboriosam eos',
        severity: 'high',
        due_date: '2020-12-31',
        assigned_to: 1,
        status: 'to_do',
        description: 'phasellus rem voluptas ullamcorper facere',
      };
    },

    getStatusDisplayFlag: () => {
      return () => 'To Do';
    },

    getStatusColorClass: () => {
      return () => 'dark';
    },
  };

  store = new Vuex.Store({
    getters,
  });

  wrapper = shallowMount(ViewIssues, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
    store,
    localVue,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ViewIssues', () => {
  test('is a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('find IssueCard component', () => {
    const cardComp = wrapper.findComponent(IssueCard);
    expect(cardComp.exists()).toBe(true)
  });

  test('check Select assignee-filter length', () => {
    expect(wrapper.findAll('select#assigneeFilter option:not([value=""])').length).toBe(2);
  });

  test('check Select status-filter length', () => {
    expect(wrapper.findAll('select#statusFilter option:not([value=""])').length).toBe(2);
  });

  test('check issues length', () => {		
    const cardComp = wrapper.findAllComponents(IssueCard);
    expect(cardComp.length).toBe(2);
  });
});
